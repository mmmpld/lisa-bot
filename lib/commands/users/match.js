"use strict";

const sortStr = require("../lib/sortStr");
const {
    isRegExp
} = require("lodash");

const buildRegex = function (match, flags) {
    let result;

    try {
        result = new RegExp(match, flags);
    } catch (err) {
        return err.toString();
    }

    return result;
};

module.exports = function (args, msg) {
    const regex = buildRegex(args.match, args.flags);

    if (isRegExp(regex)) {
        const members = msg.guild.members.array();
        const matching = members.filter(member => regex.test(member.displayName));

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
        return regex;
    }
};
