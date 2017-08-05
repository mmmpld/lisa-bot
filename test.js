"use strict";

const Dingy = require("di-ngy");
const commands = require("./lib/commands");
const onInit = require("./lib/events/onInit");
const onConnect = require("./lib/events/onConnect");
const onMessage = require("./lib/events/onMessage");

const config = {
    name: "lisa-test",
    token: process.env.DISCORD_KEY_TEST,
    prefix: "$$",
    adminIds: ["128985967875850240", "178470784984023040"],

    dataPersisted: {
        dir: "./data/",
        files: [
            "lisa",

            "tag_storage",

            "pokemon_abilities",
            "pokemon_items",
            "pokemon_moves",
            "pokemon_pokedex",
            "pokemon_typechart"
        ]
    },

    options: {
        enableDefaultCommands: true, //If the builting "about", "help" and "eval" commands should be active
        namesAreCaseSensitive: true, //cli-ngy:If false, "#botPrefix# hELp" will work too
        allowQuotedStrings: true, //cli-ngy:If strings containing spaces should be kept together when enclosed in quotes.
        validQuotes: ["\""], //cli-ngy:List of characters to support enclosing quotedStrings for.

        answerToMissingCommand: true, //If a message should be sent indicating that the command requested doesn't exist
        answerToMissingArgs: true, //If a message should be sent indicating that arguments were missing
        answerToMissingPerms: true, //If a message should be sent indicating that permissions were missing

        sendFilesForLongReply: true, //If replies over 2000 chars should be sent as file instead

        logLevel: "debug"
    }
};
const events = {
    onInit,
    onConnect,
    onMessage
};

const bot = new Dingy(config, commands, {}, events);

bot.connect();
