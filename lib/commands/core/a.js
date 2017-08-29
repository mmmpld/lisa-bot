"use strict";

module.exports = function () {
    return new Array(Math.ceil(Math.random() * 100)).fill("a").map(a => Math.random() > 0.5 ? a.toUpperCase() : a).join("");
};
