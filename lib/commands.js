"use strict";

const about = require("./commands/core/about");
const invite = require("./commands/core/invite");

const lisa_status = require("./commands/lisa/status");
const lisa_score = require("./commands/lisa/score");
const lisa_replant = require("./commands/lisa/replant");
const lisa_water = require("./commands/lisa/water");
const lisa_burn = require("./commands/lisa/burn");
const lisa_pet = require("./commands/lisa/pet");
const lisa_hug = require("./commands/lisa/hug");
const lisa_joke = require("./commands/lisa/joke");
const lisa_punch = require("./commands/lisa/punch");
const lisa_topic = require("./commands/lisa/topic");
const lisa_flirt = require("./commands/lisa/flirt");
const lisa_meow = require("./commands/lisa/meow");
const lisa_rawr = require("./commands/lisa/rawr");
const lisa_baa = require("./commands/lisa/baa");
const lisa_awoo = require("./commands/lisa/awoo");
const lisa_python = require("./commands/lisa/python");
const lisa_cutie = require("./commands/lisa/cutie");

const tag_eval = require("./commands/tag/eval");
const tag_set = require("./commands/tag/set");
const tag_get = require("./commands/tag/get");
const tag_raw = require("./commands/tag/raw");
const tag_tree = require("./commands/tag/tree");
const tag_owner = require("./commands/tag/owner");
const tag_yna = require("./commands/tag/yna");

const fun_commit = require("./commands/fun/commit");
const fun_rate = require("./commands/fun/rate");
const fun_ship = require("./commands/fun/ship");
const fun_interesting = require("./commands/fun/interesting");
const fun_roast = require("./commands/fun/roast");
const fun_clap = require("./commands/fun/clap");
const fun_square = require("./commands/fun/square");
const fun_respect = require("./commands/fun/respect");

const tictactoe_play = require("./commands/tictactoe/play");
const tictactoe_field = require("./commands/tictactoe/field");
const tictactoe_new = require("./commands/tictactoe/new");

/*
const tetris_play = require("./commands/tetris/play");
const tetris_field = require("./commands/tetris/field");
const tetris_new = require("./commands/tetris/new");
*/

module.exports = {
    /**
     * Core
     */
    "about": {
        fn: about,
        alias: ["info"],
        args: [],
        help: {
            short: "About this bot",
            long: "Shows info about this bot"
        }
    },
    "invite": {
        fn: invite,
        alias: ["join"],
        args: [],
        help: {
            short: "Add Lisa to your server",
            long: "Allows you to invite Lisa to your server"
        }
    },

    /**
     * Lisa
     */
    "status": {
        fn: lisa_status,
        alias: [],
        args: [],
        help: {
            short: "Show how Lisa is doing",
            long: "Show how Lisa is doing"
        }
    },
    "score": {
        fn: lisa_score,
        alias: [],
        args: [],
        help: {
            short: "Show Lisa's score",
            long: "Show Lisa's score"
        }
    },
    "replant": {
        fn: lisa_replant,
        alias: ["respawn"],
        args: [],
        help: {
            short: "Replant Lisa",
            long: "Replant Lisa"
        }
    },
    "water": {
        fn: lisa_water,
        alias: [],
        args: [],
        help: {
            short: "Water Lisa",
            long: "Water Lisa"
        }
    },
    "burn": {
        fn: lisa_burn,
        alias: ["fire", "killitwithfire"],
        args: [],
        help: {
            short: "Burn...Lisa?",
            long: "Burn...Lisa? (you monster)"
        }
    },
    "pet": {
        fn: lisa_pet,
        alias: ["pat"],
        args: [],
        help: {
            short: "Pet Lisa",
            long: "Pet Lisa"
        }
    },
    "hug": {
        fn: lisa_hug,
        alias: ["snug"],
        args: [],
        help: {
            short: "Hug Lisa",
            long: "Hug Lisa"
        }
    },
    "joke": {
        fn: lisa_joke,
        alias: ["pun"],
        args: [],
        help: {
            short: "Tell Lisa a joke",
            long: "Tell Lisa a joke"
        }
    },
    "punch": {
        fn: lisa_punch,
        alias: ["cut"],
        args: [],
        help: {
            short: "Punch Lisa",
            long: "Punch Lisa"
        }
    },
    "topic": {
        fn: lisa_topic,
        alias: ["conversation"],
        args: [],
        help: {
            short: "Let Lisa decide the topic",
            long: "Let Lisa decide the topic"
        }
    },
    "flirt": {
        fn: lisa_flirt,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: ";)",
            long: ";)"
        }
    },
    "meow": {
        fn: lisa_meow,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "Meow",
            long: "Meow"
        }
    },
    "rawr": {
        fn: lisa_rawr,
        alias: ["owo"],
        args: [],
        hidden: true,
        help: {
            short: "Rawr",
            long: "Rawr ;^)"
        }
    },
    "baa": {
        fn: lisa_baa,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "Baa",
            long: "Baaaaa~"
        }
    },
    "awoo": {
        fn: lisa_awoo,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "Awoo",
            long: "Awooooo~"
        }
    },
    "python": {
        fn: lisa_python,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: ";",
            long: ";"
        }
    },
    "cutie": {
        fn: lisa_cutie,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "<3",
            long: "<3"
        }
    },

    /**
     * Fun
     */
    "commit": {
        fn: fun_commit,
        alias: [],
        args: [],
        help: {
            short: "Shows a commit message",
            long: "Shows a commit message"
        }
    },
    "rate": {
        fn: fun_rate,
        alias: [],
        args: [{
            name: "thing",
            required: true,
            help: "Thing to rate"
        }],
        help: {
            short: "Rates something",
            long: "Rates something from 1 to 10"
        }
    },
    "ship": {
        fn: fun_ship,
        alias: ["fuse"],
        args: [{
            name: "person1",
            required: true,
            help: "Person 1"
        }, {
            name: "person2",
            default: "Nothing",
            required: false,
            help: "Person 2"
        }],
        help: {
            short: "Ships people",
            long: "Ships person 1 with person 2"
        }
    },
    "roast": {
        fn: fun_roast,
        alias: ["roasted"],
        args: [{
            name: "thing",
            required: true,
            help: "Thing to roast"
        }],
        help: {
            short: "Roast a person",
            long: "Roast a person"
        }
    },
    "interesting": {
        fn: fun_interesting,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "Declare something for interesting",
            long: "Declare something for interesting"
        }
    },
    "square": {
        fn: fun_square,
        alias: ["squares"],
        args: [{
            name: "text",
            required: true,
            help: "Text to square"
        }],
        help: {
            short: "Output a text as square",
            long: "Output a text as square"
        }
    },
    "clap": {
        fn: fun_clap,
        alias: ["clapifier"],
        args: [{
            name: "text",
            required: true,
            help: "Text to clap"
        }],
        help: {
            short: "Output a text clapped",
            long: "Output a text clapped"
        }
    },
    "respect": {
        fn: fun_respect,
        alias: ["f", "respects"],
        args: [],
        hidden: true,
        help: {
            short: "Pay respect",
            long: "Pay respect"
        }
    },

    /**
     * Tags
     */
    "tag": {
        fn: tag_get,
        alias: ["t"],
        args: [{
            name: "key",
            required: true,
            help: "Tag name"
        }, {
            name: "args",
            required: false,
            default: "",
            help: "args"
        }],
        help: {
            short: "Loads a tag",
            long: "Loads a tag stored in the bots db"
        },
        sub: {
            "eval": {
                fn: tag_eval,
                alias: [],
                args: [{
                    name: "yna",
                    required: true,
                    help: "YNA Code"
                }, {
                    name: "args",
                    required: false,
                    default: "",
                    help: "args"
                }],
                help: {
                    short: "Evaluates yna",
                    long: "Evaluates yna"
                }
            },
            "set": {
                fn: tag_set,
                alias: ["create"],
                args: [{
                    name: "key",
                    required: true,
                    help: "Tag name"
                }, {
                    name: "yna",
                    required: false,
                    default: null,
                    help: "YNA Code"
                }],
                help: {
                    short: "Saves a tag",
                    long: "Saves a tag to the bots db"
                }
            },
            "owner": {
                fn: tag_owner,
                alias: [],
                args: [{
                    name: "key",
                    required: true,
                    help: "Tag name"
                }],
                help: {
                    short: "Retrieves the owner of a tag",
                    long: "Retrieves the owner of a tag"
                }
            },
            "raw": {
                fn: tag_raw,
                alias: ["code"],
                args: [{
                    name: "key",
                    required: true,
                    help: "Tag name"
                }],
                help: {
                    short: "Gets the raw code of a tag",
                    long: "Gets the raw code of a tag"
                }
            },
            "tree": {
                fn: tag_tree,
                alias: ["debug"],
                args: [{
                    name: "key",
                    required: true,
                    help: "Tag name"
                }],
                help: {
                    short: "Gets the parsed code of a tag",
                    long: "Gets the parsed code of a tag"
                }
            },
            "yna": {
                fn: tag_yna,
                alias: ["help", "info", "na", "about"],
                args: [],
                help: {
                    short: "Displays Info about YNA",
                    long: "Displays Info about YNA"
                }
            }
        }
    },

    /**
     * TicTacToe
     */
    "tictactoe": {
        fn: tictactoe_play,
        alias: ["ttt"],
        args: [{
            name: "x",
            required: true,
            help: "X-coordinate (1|2|3)"
        }, {
            name: "y",
            required: true,
            help: "Y-coordinate (a|b|c)"
        }],
        help: {
            short: "Play TicTacToe",
            long: "Play TicTacToe"
        },
        sub: {
            "field": {
                fn: tictactoe_field,
                alias: ["board", "view", "show"],
                args: [],
                help: {
                    short: "Show field",
                    long: "Show field"
                }
            },
            "new": {
                fn: tictactoe_new,
                alias: ["reset", "start"],
                args: [],
                help: {
                    short: "Reset field",
                    long: "Reset field"
                }
            }
        }
    },

    /**
     * Tetris
     */
    /*"tetris": {
        fn: tetris_play,
        alias: ["ttr"],
        args: [{
            name: "action",
            required: true,
            help: "Action to perform (left/right/rotate-l/rotate-r/drop)"
        }],
        hidden: true,
        admin: true,
        help: {
            short: "Play Tetris",
            long: "Play Tetris"
        },
        sub: {
            "field": {
                fn: tetris_field,
                alias: ["board", "view", "show"],
                args: [],
                help: {
                    short: "Show field",
                    long: "Show field"
                }
            },
            "new": {
                fn: tetris_new,
                alias: ["reset", "clear"],
                args: [],
                help: {
                    short: "Reset field",
                    long: "Reset field"
                }
            }
        }
    }*/
};
