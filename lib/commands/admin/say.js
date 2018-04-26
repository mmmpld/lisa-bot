"use strict";

const sortStr = require("../lib/sortStr");

module.exports = function (args, msg, app) {
    const channel = msg.client.channels.get("352655217717936150");
    channel.send(args.text);

    return [channel.name + ": " + args.text, "md", []];
};
