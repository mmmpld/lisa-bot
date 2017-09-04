"use strict";

module.exports = function (args, msg, app) {
    const text = [
        "Hello " + msg.member.nickname + ", thank you so much for having me.",
        "I'm a plant that was once interviewed by Poppy.",
        "<http://poppy.wikia.com/wiki/Plant>",
        app.strings.separator,
        "For more information, use `$help`.", 
        "Friend of <https://github.com/FelixRilling/lisa-bot>.",
        app.strings.separator
    ].join("\n");

    return [text, false, ["https://www.youtube.com/watch?v=ayfBf2J-Qlc"]];
};
