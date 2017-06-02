"use strict";

const Yna = require("ynajs");
const createCtx = require("./lib/createCtx");
const user = require("./lib/commands/user");
const member = require("./lib/commands/member");
const nameof = require("./lib/commands/nameof");

module.exports = function (args, msg, app, cliLookup) {
    const argsArr = cliLookup.args._all.slice(1);
    const tagInstance = new Yna(args.yna);
    const ctx = createCtx(msg, msg.member, "anonymous");
    let result;

    tagInstance.addCommand("user", user(app, msg));
    tagInstance.addCommand("member", member(app, msg));
    tagInstance.addCommand("nameof", nameof(app, msg));
    result = tagInstance.run(argsArr, ctx);

    return result;
};
