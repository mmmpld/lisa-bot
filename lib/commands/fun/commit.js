"use strict";

const commitMessages = require("./lib/whatthecommit.json");

module.exports = function () {
    const index = Math.floor(Math.random() * commitMessages.length);

    return [commitMessages[index], "md"];
};
