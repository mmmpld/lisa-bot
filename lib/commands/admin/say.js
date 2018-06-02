"use strict";

const sortStr = require("../lib/sortStr");

module.exports = function (args, msg, app) {
    const channel = msg.client.channels.get("451567444717207553");
    channel.send(args.text);

    return [channel.name + ": " + args.text, "md", []];
};
