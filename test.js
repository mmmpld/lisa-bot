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
        files: ["lisa", "tag_storage", "tictactoe", "tetris"]
    },

    options: {
        enableDefaultCommands: true,
        commandsAreCaseSensitive: true,

        answerToMissingCommand: false,
        answerToMissingArgs: true,
        answerToMissingPerms: false,

        sendFilesForLongReply: true,

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
