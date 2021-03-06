"use strict";

const Yna = require("ynajs");
const createCtx = require("ynajs/lib/commands/discord/lib/createCtx");

module.exports = function (args, msg, app, cliLookup) {
    const argsArr = cliLookup.args._all.slice(1);
    const tagInstance = new Yna(args.yna, {
        plugins: {
            discord: true
        }
    });
    const ctx = createCtx(msg, msg.member, "anonymous", 0);
    let result;

    result = tagInstance.run(argsArr, ctx, {
        plugins: {
            discord: {
                msg,
                app
            }
        }
    });

    return result;
};
