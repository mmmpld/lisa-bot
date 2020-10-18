"use strict";

const LISA_TICK_INTERVAL = 15000; //0.25min

const status = require("../commands/lisa/lib/status");

module.exports = function (app) {
    const bot = app.bot;
    const currentStatus = status.get(app);

    status.updateExternal(app, currentStatus);

    /**
     * Lisa Waterlevel
     */
    bot.setInterval(() => {
        const currentStatus = status.get(app);

        status.modify(app, currentStatus, {
            water: -0.018,
            happiness: -0.2
        }, "Time");
    }, LISA_TICK_INTERVAL);
};
