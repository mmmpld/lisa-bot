"use strict";

const objectFind = require("../lib/objectFind");
const jsonToYaml = require("di-ngy/lib/util/jsonToYaml");

module.exports = function (args, msg, app) {
    const pokemonPokedex = app.dataPersisted.pokemon_format.getKey("data");
    const formatData = pokemonPokedex[args.name.toLowerCase()];

    if (formatData) {
        return [jsonToYaml(formatData), "yaml"];
    } else {
        return `Pokemon '${args.name}' not found.`;
    }
};
