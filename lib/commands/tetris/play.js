"use strict";

const field = require("./lib/field");
const symbol = require("./lib/symbol");
const play = require("./lib/play");
const display = require("./lib/display");

const actions = {
    "left": field => play.move(field, true),
    "right": field => play.move(field, false),
    "rotate-l": play.rotate(field, true),
    "rotate-r": play.rotate(field, false),
    "drop": play.drop(field),
};
const actionKeys = Object.keys(actions);


module.exports = function (args, msg, app) {
    const action = args.action.toLowerCase();

    if (actionKeys.includes(action)) {
        /*const fieldCurrent = field.get(app);
        const symbolCurrent = symbol.get(app);

        if (play.canPlace(fieldCurrent, x, y)) {
            const fieldNew = play.place(fieldCurrent, x, y, symbolCurrent);
            const winner = play.checkForWinner(fieldNew);
            const result = [display.field(fieldNew)];

            field.set(app, fieldNew);
            symbol.set(app, symbol.toggle(symbolCurrent));

            if (winner) {
                result.push(`\n${winner} won!`);
                field.set(app, field._default());
            }

            return [result.join("\n"), "field"];
        } else {
            return "This field is already taken!";
        }*/
    } else {
        return "Invalid action (left/right/rotate-l/rotate-r/drop)";
    }
};
