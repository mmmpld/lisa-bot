"use strict";

const validX = ["A", "B", "C"];
const validY = ["1", "2", "3"];

const field = require("./lib/field");
const symbol = require("./lib/symbol");
const play = require("./lib/play");
const display = require("./lib/display");

module.exports = function (args, msg, app) {
    const x = validX.indexOf(args.x.toUpperCase());
    const y = validY.indexOf(args.y.toUpperCase());

    if (x !== -1 && y !== -1) {
        const fieldCurrent = field.get(app);
        const symbolCurrent = symbol.get(app);

        if (play.canPlace(fieldCurrent, x, y)) {
            const fieldNew = play.place(fieldCurrent, x, y, symbolCurrent);
            const winner = play.checkForWinner(fieldNew);
            const result = [display.field(fieldNew)];

            field.set(app, fieldNew);
            symbol.set(app, symbol.toggle(symbolCurrent));

            if (winner) {
                result.push(`\n${winner} won!`);
                field.set(app, field._default());
            }

            return [result.join("\n"), "field"];
        } else {
            return "This field is already taken!";
        }
    } else {
        return "Invalid input (example for valid input: 'a 2' or 'c 1')";
    }
};
