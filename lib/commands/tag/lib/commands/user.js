"use strict";

const convertMember = require("../convertMember");

module.exports = function (app, msg) {
    return function () {
        const membersArr = msg.guild.members.array();
        const randomMember = convertMember(membersArr[Math.floor(Math.random() * membersArr.length)]);

        return randomMember.__default;
    };
};
