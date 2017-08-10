"use strict";

const objectFind = require("../lib/objectFind");
const formatJson = require("../lib/formatJson");

module.exports = function (args, msg, app) {
    const pokemonPokedex = app.dataPersisted.pokemon_format.getKey("data");
    const formatData = pokemonPokedex[args.name.toLowerCase()];

    if (formatData) {
        return [formatJson(formatData), "yaml"];
    } else {
        return `Pokemon '${args.name}' not found.`;
    }
};
