"use strict";

const YoutubeMusicPlayer = require("./lib/youtubemusicplayer");

module.exports = function (args, msg, app) {
    const player = app.data.player ? app.data.player : new YoutubeMusicPlayer();
    const member = msg.member;
    const channel = member.voiceChannel;

    if (typeof channel !== "undefined") {
        return player
            .connect(channel)
            .then(() => {
                return player
                    .add(args.url)
                    .then(item => {
                        return `The video '${item.name}' has been added.`;
                    })
                    .catch(err => {
                        return "An error occured loading the YouTube Video.";
                    });
            })
            .catch(err => {
                app.log.error("VoiceConnection", err);

                return "an error occured joining the voice channel.";
            });
    } else {
        return "You must be in a voicechannel for this command.";
    }
};
