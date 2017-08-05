"use strict";

const objectFind = require("../lib/objectFind");

module.exports = function (args, msg, app) {
    const pokemonItem = app.dataPersisted.pokemon_items.getKey("data") || {};
    const itemData = objectFind(pokemonItem, item => {
        if (item.name && (item.name.toLowerCase() === args.name.toLowerCase())) {
            return item;
        }

        return false;
    });

    if (itemData) {
        const result = JSON.stringify(itemData, null, "    ");

        return [result, "json"];
    } else {
        return `Item '${args.name}' not found.`;
    }
};
