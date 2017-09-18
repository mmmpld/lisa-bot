"use strict";

module.exports = function (args, msg, app) {
    var nicknameOrUsername = msg.member.nickname !== null ? msg.member.nickname : msg.author.username;
    var text = [
        "Hello " + nicknameOrUsername + ", thank you so much for having me.",
        "I'm a plant that was once interviewed by Poppy.",
        "<http://poppy.wikia.com/wiki/Plant>",
        app.strings.separator,
        "For more information, use `p help`.", 
        "Friend of <https://github.com/FelixRilling/lisa-bot>",
        app.strings.separator,
        "https://www.youtube.com/watch?v=ayfBf2J-Qlc"
    ].join("\n");

    return [text, false, false];
};
