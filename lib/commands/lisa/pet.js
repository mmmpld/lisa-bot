"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_is pet_", "_is petted_", "_smiles and is pet_", "_is pet in japanese_"];
    const onFailure = [];
    const onDead = ["It's too late to pet poor Lisa..."];
    const check = true;
    const modifier = {
        happiness: 10
    };

    return basicTask(
        msg,
        app,
        check,
        modifier,
        onSucess,
        onFailure,
        onDead
    );
};
