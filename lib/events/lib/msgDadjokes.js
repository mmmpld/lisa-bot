"use strict";

const LEGAL_START = ["im", "i'm", "i am"];

const sendMessage = require("di-ngy/lib/events/lib/sendMessage");

module.exports = function (msg, app) {
    const messageText = msg.content;
    const messageTextLower = messageText.toLowerCase();

    LEGAL_START.forEach(start => {
        if (messageTextLower.startsWith(start)) {
            const text = messageText.substr(start.length);

            sendMessage(app, msg, [`Hi ${text}!`]);
        }
    });
};
