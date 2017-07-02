"use strict";

const Yna = require("ynajs");
const createCtx = require("./lib/createCtx");
const resolveUserId = require("./lib/resolveUserId");
const user = require("./lib/commands/user");
const member = require("./lib/commands/member");
const nameof = require("./lib/commands/nameof");
const save = require("./lib/commands/save");
const init = require("./lib/commands/init");

module.exports = function (args, msg, app, cliLookup) {
    const tagStorage = app.dataPersisted.tag_storage;
    const tag = tagStorage.getKey(args.key);

    if (tag) {
        const argsArr = cliLookup
            .args
            ._all
            .slice(1);
        const me = resolveUserId(tag.creator, msg.guild);
        const tagInstance = new Yna(tag.content, {
            loadJSON: true
        });
        const ctx = createCtx(msg, me, tag.uses, args.key);
        let result;

        tagInstance.addCommand("user", user(app, msg));
        tagInstance.addCommand("member", member(app, msg));
        tagInstance.addCommand("nameof", nameof(app, msg));
        tagInstance.addCommand("nameof", save(app, msg));
        tagInstance.addCommand("nameof", init(app, msg));
        result = tagInstance.run(argsArr, ctx);

        tag.uses++;
        tagStorage.setKey(args.key, tag);
        tagStorage.save(true);

        return result;
    } else {
        return `Tag '${args.key}' not found.`;
    }
};
