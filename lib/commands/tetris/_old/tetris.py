from random import choice
from copy import deepcopy
import re

class Tetris:
    def __init__(self, client, message, channel):
        self.client = client
        self.channel = channel

        self.dead = False

        self.pieces = {
            "T": [(0,0),(1,0) ,(0,-1) ,(-1,0), 4, 0],
            "L": [(0,0),(-1,0),(-1,-1),(1,0),  4, 0],
            "J": [(0,0),(-1,0),(1,-1) ,(1,0),  4, 0],
            "S": [(0,0),(-1,0),(1,-1) ,(0,-1), 2, 0],
            "Z": [(0,0),(1,0) ,(-1,-1),(0,-1), 2, 0],
            "I": [(0,0),(-1,0),(2,0) ,(1,0),  2, 0],
            "O": [(0,0),(1,0),(1,-1),(0,-1), 1, 0]
        }

        self.field = [[False] * 10 for _ in range(24)]

        self.score = 0
        self.lines = 0
        self.level = 0

        self.cur_x = 4
        self.cur_y = 19
        self.current = choice(["T","L","J","S","Z","I","O"])
        self.history = self.current
        self.next = choice(["T","L","J","S","Z","I","O"])
        if self.next == self.history:
            self.next = choice(["T","L","J","S","Z","I","O"])
        self.active_piece = deepcopy(self.pieces[self.current])

    def get_next(self):

        next = choice(["T","L","J","S","Z","I","O"])
        if next == self.history:
            next = choice(["T","L","J","S","Z","I","O"])

        self.next = next

    def rotate(self, ccw):
        piece = self.active_piece
        if piece[4] == 4:
            if ccw:
                for i in range(4):
                    x, y = piece[i]
                    piece[i] = (-y, x)
                piece[5] = (piece[5] - 1)%4
            else:
                for i in range(4):
                    x, y = piece[i]
                    piece[i] = (y, -x)
                piece[5] = (piece[5] + 1)%4

        elif piece[4] == 2:
            if piece[5] == 0:
                for i in range(4):
                    x, y = piece[i]
                    piece[i] = (-y, x)
                piece[5] = 1
            else:
                for i in range(4):
                    x, y = piece[i]
                    piece[i] = (y, -x)
                piece[5] = 0
        self.active_piece = piece

    def check_collision(self):
        piece = self.active_piece
        for i in range(4):
            x, y = piece[i]
            if x + self.cur_x > 9 or x + self.cur_x < 0 or y + self.cur_y < 0 or y + self.cur_y > 23 or self.field[y + self.cur_y][x + self.cur_x]:
                return True
        return False

    def check_lines(self):
        line_count = 0
        for row in range(23, -1, -1):
            if False not in self.field[row]:
                self.field.pop(row)
                line_count += 1
                self.field.append([False]*10)
        self.score += ([0, 40, 100, 300, 1200][line_count])*(self.level+1)
        self.lines += line_count
        self.level = self.lines // 10

    def lock(self):
        # first harddrop piece
        while not self.check_collision():
            self.cur_y -= 1
            self.score += 1
        self.cur_y += 1
        self.score -= 1

        # register solid blocks
        for i in range(4):
            x, y = self.active_piece[i]
            self.field[y + self.cur_y][x + self.cur_x] = True

        self.check_lines()

        # advance piece sequence
        self.current = self.next
        self.get_next()
        self.history = self.next
        self.cur_x = 4
        self.cur_y = 19
        self.active_piece = deepcopy(self.pieces[self.current])

        if self.check_collision():
            self.dead = True

    def move(self, direction, number):
        if direction == "down":
            #softdrop
            for k in range(number):
                self.cur_y -= 1
                self.score +=1
                if self.check_collision():
                    self.cur_y += 1
                    self.score -= 1
                    self.lock()
                    return
        elif direction == "left":
            for k in range(number):
                self.cur_x -= 1
                if self.check_collision():
                    self.cur_x += 1
                    return
        elif direction == "right":
            for k in range(number):
                self.cur_x += 1
                if self.check_collision():
                    self.cur_x -= 1
                    return

    def render_field(self):
        string = ""

        #display NEXT
        next_piece = deepcopy(self.pieces[self.next])
        next_grid = [[False]*4 for lul in [0,1]]
        for i in range(4):
            x, y = next_piece[i]
            next_grid[y+1][x+1] = True
        for y in [1,0]:
            string += " NEXT:  " if y == 0 else "        "
            for x in range(4):
                string += "()" if next_grid[y][x] else "  "
            string += "\n"
        string += "------------------------\n"

        #display field state
        for i in range(4):
            x, y = self.active_piece[i]
            self.field[y+self.cur_y][x+self.cur_x] = None
        for r in range(19, -1, -1):
            row = self.field[r]
            string += "<|"
            for i in row:
                if i:
                    string += "[]"
                elif i == None:
                    string += "()"
                else:
                    string += "  "
            string += "|>\n"
        for i in range(4):
            x, y = self.active_piece[i]
            self.field[y+self.cur_y][x+self.cur_x] = False

        #add score/lines
        string = ("```\n"
                  " LINES-{0}  SCORE-{1} \n"
                  "========================\n").format(self.lines, self.score) + string
        string += "========================\n```"
        return string

    def analyse_message(self, message):
        content = message.content.lower()
        match = re.match("^move [0-9]+ cells (left|down|right)$", content, re.I) # thanks poochy.EXE for this regex
        return (content in ["rotate left", "rotate counter-clockwise", "rotate right", "rotate clockwise", "lock", "quit"] or match)

    async def play(self):
        while not self.dead:
            await self.client.send_message(self.channel, self.render_field())
            msg = await self.client.wait_for_message(channel = self.channel, check = self.analyse_message)

            content = msg.content.lower()
            print(content)
            if content == "rotate left" or content == "rotate counter-clockwise":
                self.rotate(True)
                if self.check_collision():
                    self.rotate(False)
            elif content == "rotate right" or content == "rotate clockwise":
                self.rotate(False)
                if self.check_collision():
                    self.rotate(True)
            elif content == "lock":
                self.lock()
            elif content == "quit":
                self.dead = True
            else:
                match = re.match("^move ([0-9]+) cells? (left|down|right)$", content, re.I)
                if match:
                    self.move(match.group(2), int(match.group(1)))

        await self.client.send_message(self.channel, "Game over! You scored {0} point{2} by clearing {1} line{3}.".format(self.score, self.lines, "" if self.score == 1 else "s", "" if self.lines == 1 else "s"))

