"use strict";

const fs = require("fs");

const fileAbility = require("../../../../cache/pokemon/data/abilities");
const fileItems = require("../../../../cache/pokemon/data/items");
const fileMoves = require("../../../../cache/pokemon/data/moves");
const filePokedex = require("../../../../cache/pokemon/data/pokedex");
const fileStatuses = require("../../../../cache/pokemon/data/statuses");
const fileTypechart = require("../../../../cache/pokemon/data/typechart");

const filesToConvert = [
    [fileAbility, "abilities"],
    [fileItems, "items"],
    [fileMoves, "moves"],
    [filePokedex, "pokedex"],
    [fileStatuses, "statuses"],
    [fileTypechart, "typechart"],
];

const DIR_OUTPUT = "./data/";

filesToConvert.forEach(file => {
    const fileJSON = JSON.stringify({
        data: file[0]
    });

    fs.writeFile(`${DIR_OUTPUT}/pokemon_${file[1]}.json`, fileJSON, (err) => {
        if (err) {
            throw err;
        }
    });
});

console.log("Finished converting");
