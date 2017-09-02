"use strict";

const Dingy = require("di-ngy");
const commands = require("./lib/commands");
const onInit = require("./lib/events/onInit");
const onConnect = require("./lib/events/onConnect");
const onMessage = require("./lib/events/onMessage");

const config = {
    name: "lisa-bot",
    token: process.env.DISCORD_KEY,
    prefix: "$",
    adminIds: [
        "222957769131687936", //mmmpld
    ],
    dataPersisted: {
        dir: "./data/",
        files: [
            "lisa",

            "tag_storage",

            "pokemon_abilities",
            "pokemon_items",
            "pokemon_moves",
            "pokemon_pokedex",
            "pokemon_typechart",
            "pokemon_format"
        ]
    },

    options: {
        enableDefaultCommands: true, //If the builting "about", "help" and "eval" commands should be active
        namesAreCaseSensitive: false, //cli-ngy:If false, "#botPrefix# hELp" will work too
        allowQuotedStrings: true, //cli-ngy:If strings containing spaces should be kept together when enclosed in quotes.
        validQuotes: ["\""], //cli-ngy:List of characters to support enclosing quotedStrings for.

        answerToMissingCommand: false, //If a message should be sent indicating that the command requested doesn't exist
        answerToMissingArgs: true, //If a message should be sent indicating that arguments were missing
        answerToMissingPerms: true, //If a message should be sent indicating that permissions were missing

        sendFilesForLongReply: true, //If replies over 2000 chars should be sent as file instead

        logLevel: "info" //Level of log messages recommended to be either "debug" or "info", but can be any supported log-level
    }
};
const events = {
    onInit,
    onConnect,
    onMessage
};

const bot = new Dingy(config, commands, {}, events);

bot.connect();
