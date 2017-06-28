"use strict";

const YoutubeMusicPlayer = require("./lib/youtubemusicplayer");

module.exports = function (args, msg, app) {
    const player = app.data.player ? app.data.player : new YoutubeMusicPlayer();
    const member = msg.member;
    const channel = member.voiceChannel;

    if (typeof channel !== "undefined") {
        player.destroy();

        return "Player stopped";
    } else {
        return "You must be in a voicechannel for this command.";
    }
};
