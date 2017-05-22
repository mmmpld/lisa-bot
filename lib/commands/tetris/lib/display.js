"use strict";

const SEPERATOR_HORIZONTAL = "=".repeat(21); // width*2 +1
const SEPERATOR_VERTICAL = "|";

const field = function (field) {
    const display = [];

    display.push(SEPERATOR_HORIZONTAL);

    field.forEach(row => {
        display.push(SEPERATOR_VERTICAL + row.join(" ") + SEPERATOR_VERTICAL);
    });

    display.push(SEPERATOR_HORIZONTAL);

    return display.join("\n");
};

module.exports = {
    field
};
