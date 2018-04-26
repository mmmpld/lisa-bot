"use strict";

const sortStr = require("../lib/sortStr");

module.exports = function (args, msg, app) {
    // const servers = msg.client.guilds.array();
    // const result = servers
    //     .map(server => server.name + ": " + server.id)
    //     .sort(sortStr)
    //     .join("\n");

    const channel = msg.client.channels.resolveID("354065429611806731");
    console.log(channel);
    const result = channel.name;

    return [result, "md", []];
};
