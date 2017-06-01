"use strict";

const LEGAL_TEXT = ["nobo", "nobo no"];

const sendMessage = require("di-ngy/lib/events/lib/sendMessage");

module.exports = function (msg, app) {
    const messageText = msg.content;
    const messageTextLower = messageText.toLowerCase();

    LEGAL_TEXT.forEach(text => {
        if (messageTextLower === text) {
            sendMessage(app, msg, ["Nobo yes"]);
        }
    });
};