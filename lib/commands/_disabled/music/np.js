"use strict";

const YoutubeMusicPlayer = require("./lib/youtubemusicplayer");

module.exports = function (args, msg, app) {
    const player = app.data.player ? app.data.player : new YoutubeMusicPlayer();
    const member = msg.member;
    const channel = member.voiceChannel;

    if (typeof channel !== "undefined") {
        if (player.current) {
            return player.current.name;
        } else {
            return "Nothing is playing right now.";
        }
    } else {
        return "You must be in a voicechannel for this command.";
    }
};
