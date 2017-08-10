"use strict";

const objectFind = require("../lib/objectFind");
const formatJson = require("../lib/formatJson");

module.exports = function (args, msg, app) {
    const pokemonType = app.dataPersisted.pokemon_typechart.getKey("data") || {};
    const typeData = objectFind(pokemonType, (type, key) => {
        if (key.toLowerCase() === args.name.toLowerCase()) {
            return type;
        }

        return false;
    });

    if (typeData) {
        return [formatJson(typeData), "yaml"];
    } else {
        return `Type '${args.name}' not found.`;
    }
};
