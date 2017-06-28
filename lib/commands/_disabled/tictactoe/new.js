"use strict";

const field = require("./lib/field");

module.exports = function (args, msg, app) {
    field.set(app, field._default());

    return "Field has been reset";
};
