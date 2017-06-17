"use strict";

const LEGAL_TEXT = /nobo n[ou]+/i;

const sendMessage = require("di-ngy/lib/events/lib/sendMessage");

module.exports = function (msg, app) {
    const messageText = msg.content;
    const messageTextLower = messageText.toLowerCase();

    if (LEGAL_TEXT.test(messageTextLower)) {
        sendMessage(app, msg, ["Nobo yes"]);
    }
};
