"use strict";

const fs = require("fs");

const fileAbility = require("../../../../cache/pokemon/data/abilities");
const fileItems = require("../../../../cache/pokemon/data/items");
const fileMoves = require("../../../../cache/pokemon/data/moves");
const filePokedex = require("../../../../cache/pokemon/data/pokedex");
const fileTypechart = require("../../../../cache/pokemon/data/typechart");

const filesToConvert = [
    [fileAbility, "abilities"],
    [fileItems, "items"],
    [fileMoves, "moves"],
    [filePokedex, "pokedex"],
    [fileTypechart, "typechart"],
];

const DIR_OUTPUT = "./data/";

const flattenData = function (obj) {
    const key = Object.keys(obj)[0]; //Input has only one top-level object

    if (key.toLowerCase().startsWith("battle")) {
        const result = obj[key];

        return result;
    } else {
        return obj;
    }
};

filesToConvert.forEach(file => {
    const fileContent = file[0];
    const fileName = file[1];
    const fileJSON = JSON.stringify({
        data: flattenData(fileContent)
    });

    fs.writeFile(`${DIR_OUTPUT}/pokemon_${fileName}.json`, fileJSON, (err) => {
        if (err) {
            throw err;
        }
    });
});

console.log("Finished converting");
