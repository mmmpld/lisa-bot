"use strict";

module.exports = function (args) {
    let spreadText = [...args.text]; // use spread rather than split to handle wide characters and emoji
    return spreadText.map(word => "**" + word.toUpperCase() + "**").join(":clap:");
};
