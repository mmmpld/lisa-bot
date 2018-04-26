"use strict";

const core_about = require("./commands/core/about");
const core_dollar = require("./commands/core/dollar");
const core_a = require("./commands/core/a");

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
const lisa_meow = require("./commands/lisa/meow");
const lisa_rawr = require("./commands/lisa/rawr");
const lisa_baa = require("./commands/lisa/baa");
const lisa_awoo = require("./commands/lisa/awoo");
const lisa_python = require("./commands/lisa/python");
const lisa_cutie = require("./commands/lisa/cutie");
const lisa_gya = require("./commands/lisa/gya");
const lisa_harp = require("./commands/lisa/harp");
const lisa_rai = require("./commands/lisa/rai");
const lisa_gao = require("./commands/lisa/gao");

const fun_commit = require("./commands/fun/commit");
const fun_rate = require("./commands/fun/rate");
const fun_ship = require("./commands/fun/ship");
const fun_interesting = require("./commands/fun/interesting");
const fun_roast = require("./commands/fun/roast");
const fun_clap = require("./commands/fun/clap");
const fun_square = require("./commands/fun/square");
const fun_respect = require("./commands/fun/respect");

const admin_servers = require("./commands/admin/servers");
const admin_say = require("./commands/admin/say");

module.exports = {
    /**
     * Core
     */
    "about": {
        fn: core_about,
        alias: ["info"],
        args: [],
        help: {
            short: "Shows info about this bot",
            long: "Shows info about this bot"
        }
    },
    // "invite": {
    //     fn: core_invite,
    //     alias: ["join"],
    //     args: [],
    //     help: {
    //         short: "Add Lisa to your server",
    //         long: "Allows you to invite Lisa to your server"
    //     }
    // },
    "$$": {
        fn: core_dollar,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "$$$",
            long: "$$$$$$"
        }
    },
    "a": {
        fn: core_a,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "AaAaAaaa",
            long: "AaAaAaaaaaaaa",
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
            short: "Show how Plant is doing",
            long: "Show how Plant is doing"
        }
    },
    "score": {
        fn: lisa_score,
        alias: [],
        args: [],
        help: {
            short: "Show Plant's score",
            long: "Show Plant's score"
        }
    },

    "water": {
        fn: lisa_water,
        alias: ["watah", "💦", "🌊", "🚰", "💧"],
        args: [],
        help: {
            short: "Water Plant",
            long: "Water Plant"
        }
    },

    "pet": {
        fn: lisa_pet,
        alias: ["pat"],
        args: [],
        help: {
            short: "Pet Plant",
            long: "Pet Plant"
        }
    },
    "hug": {
        fn: lisa_hug,
        alias: ["snug", "👐", "🤗"],
        args: [],
        help: {
            short: "Hug Plant",
            long: "Hug Plant"
        }
    },
    "joke": {
        fn: lisa_joke,
        alias: ["pun"],
        args: [],
        help: {
            short: "Tell Plant a joke",
            long: "Tell Plant a joke"
        }
    },
    "burn": {
        fn: lisa_burn,
        alias: ["fire", "killitwithfire", "🔥"],
        args: [],
        help: {
            short: "Burn...Plant?",
            long: "Burn...Plant? (you monster)"
        }
    },
    "replant": {
        fn: lisa_replant,
        alias: ["respawn", "🌱", "🌿"],
        args: [],
        help: {
            short: "Replant Plant",
            long: "Replant Plant"
        }
    },
    "punch": {
        fn: lisa_punch,
        alias: ["cut"],
        args: [],
        hidden: true,
        help: {
            short: "Punch Plant",
            long: "Punch Plant"
        }
    },
    "topic": {
        fn: lisa_topic,
        alias: ["conversation"],
        args: [],
        hidden: true,
        help: {
            short: "Let Plant decide the topic",
            long: "Let Plant decide the topic"
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
    "cutie": {
        fn: lisa_cutie,
        alias: ["miso"],
        args: [],
        hidden: true,
        help: {
            short: "<3",
            long: "<3"
        }
    },
    "gya": {
        fn: lisa_gya,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "gya",
            long: "mega gyarados"
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
    "rai": {
        fn: lisa_rai,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "Rai",
            long: "Rai"
        }
    },
    "harp": {
        fn: lisa_harp,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "harp",
            long: "harp"
        }
    },
    "gao": {
        fn: lisa_gao,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "GAO",
            long: "GAO"
        }
    },

    /**
     * Fun
     */
    "fun": {
        fn: fun_respect,
        alias: ["f"],
        args: [],
        help: {
            short: "Misc. joke commands",
            long: "Misc. joke commands; Pay respects"
        },
        sub: {
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
            "commit": {
                fn: fun_commit,
                alias: [],
                args: [],
                help: {
                    short: "Shows a commit message",
                    long: "Shows a commit message"
                }
            }
        }
    },
    servers: {
        fn: admin_servers,
        alias: [],
        args: [],
        hidden: true,
        admin: true,
        help: {
            short: "List Servers",
            long: "List Servers"
        }
    },
    say: {
        fn: admin_say,
        alias: [],
        args: [],
        hidden: true,
        admin: true,
        help: {
            short: "Plant Say",
            long: "Let the Plant speak"
        }
    }
};
