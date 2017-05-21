"use strict";

const getStatus = require("./lib/getStatus");
const displayField = require("./lib/displayField");

module.exports = function (args, msg, app) {
    const field = getStatus(app).field;

    return [displayField(field), "field"];
};
