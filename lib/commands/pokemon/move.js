"use strict";

const objectFind = require("../lib/objectFind");

module.exports = function (args, msg, app) {
    const pokemonMove = app.dataPersisted.pokemon_moves.getKey("data");
    const moveData = objectFind(pokemonMove, move => {
        if (move.name && (move.name.toLowerCase() === args.name.toLowerCase())) {
            return move;
        }

        return false;
    });

    if (moveData) {
        const result = JSON.stringify(moveData, null, "    ");

        return [result, "json"];
    } else {
        return `Move '${args.name}' not found.`;
    }
};
