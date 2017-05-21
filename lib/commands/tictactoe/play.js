"use strict";

const getStatus = require("./lib/getStatus");
const setStatus = require("./lib/setStatus");

const addSymbol = require("./lib/addSymbol");
const checkForWinner = require("./lib/checkForWinner");
const displayField = require("./lib/displayField");

const validX = ["A", "B", "C"];
const validY = ["1", "2", "3"];

module.exports = function (args, msg, app) {
    const x = validX.indexOf(args.x.toUpperCase());
    const y = validY.indexOf(args.y.toUpperCase());

    if (x !== -1 && y !== -1) {
        const status = getStatus(app);
        const field = status.field;
        const symbol = status.symbol;
        const newField = addSymbol(field, x, y, symbol);

        if (newField) {
            const winner = checkForWinner(newField);
            const display = displayField(field);
            const result = [];

            setStatus(app, {
                field,
                symbol: symbol === "X" ? "O" : "X"
            });

            result.push(display);

            if (winner) {
                result.push("\n", `${winner} won!`);
            }

            return [result.join("\n"), "field"];
        } else {
            return "This field is already taken!";
        }
    } else {
        return "Invalid input (example for valid input: 'a 2' or 'c 1')";
    }
};
