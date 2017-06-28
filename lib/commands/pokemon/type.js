"use strict";

const objectFind = require("../lib/objectFind");

module.exports = function (args, msg, app) {
    const pokemonType = app.dataPersisted.pokemon_typechart.getKey("data");
    const typeData = objectFind(pokemonType, (type, key) => {
        if (key.toLowerCase() === args.name.toLowerCase()) {
            return type;
        }

        return false;
    });

    if (typeData) {
        const result = JSON.stringify(typeData, null, "    ");

        return [result, "json"];
    } else {
        return `Type '${args.name}' not found.`;
    }
};
