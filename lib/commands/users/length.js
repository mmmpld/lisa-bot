"use strict";

const sortStr = require("../lib/sortStr");

const mapFromObject = obj => new Map(Object.entries(obj));

const operations = mapFromObject({
    "eq": (a, b) => a === b,
    "ne": (a, b) => a !== b,
    "gt": (a, b) => a > b,
    "ge": (a, b) => a >= b,
    "lt": (a, b) => a < b,
    "le": (a, b) => a <= b
});

module.exports = function (args, msg) {
    const members = msg.guild.members.array();

    if (operations.has(args.op)) {
        const op = operations.get(args.op);
        const matching = members.filter(member => op(member.displayName.length, Number(args.length)));

        if (args.outputLength === "false") {
            const result = matching
                .map(member => member.displayName)
                .sort(sortStr)
                .join("\n");

            return [result, "md", []];
        } else {
            return String(matching.length);
        }
    } else {
        return "Invalid operation";
    }
};
