"use strict";

const objectFind = require("../lib/objectFind");

module.exports = function (args, msg, app) {
    const pokemonAbility = app.dataPersisted.pokemon_abilities.getKey("data") || {};
    const abilityData = objectFind(pokemonAbility, ability => {
        if (ability.name && (ability.name.toLowerCase() === args.name.toLowerCase())) {
            return ability;
        }

        return false;
    });

    if (abilityData) {
        const result = JSON.stringify(abilityData, null, "    ");

        return [result, "json"];
    } else {
        return `Ability '${args.name}' not found.`;
    }
};
