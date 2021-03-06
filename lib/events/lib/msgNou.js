"use strict";

const ID_CUTIE = "273221196001181697";
const LEGAL_TEXT = /^no+ u*|nu+$/i;

const sendMessage = require("di-ngy/lib/events/lib/sendMessage");

module.exports = function (msg, app) {
    if (msg.author.id === ID_CUTIE) {
        const messageText = msg.content;
        const messageTextLower = messageText.toLowerCase();

        if (LEGAL_TEXT.test(messageTextLower)) {
            sendMessage(app, msg, ["yes u"]);
        }
    }
};
