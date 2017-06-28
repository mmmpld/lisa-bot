"use strict";

const field = require("./lib/field");
const display = require("./lib/display");

module.exports = function (args, msg, app) {
    const fieldCurrent = field.get(app);

    return [display.field(fieldCurrent), "field"];
};
