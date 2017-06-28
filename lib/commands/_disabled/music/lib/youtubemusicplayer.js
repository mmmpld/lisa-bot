"use strict";

const ytdl = require("ytdl-core");

module.exports = class Player {
    constructor() {
        this.queue = [];
        this.current = null;
        this.playing = false;

        this.channel = null;
        this.connection = null;
    }
    connect(channel) {
        return new Promise((resolve, reject) => {
            channel
                .join()
                .then(connection => {
                    this.channel = channel;
                    this.connection = connection;
                    return resolve(this);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
    destroy() {
        this.connection.disconnect();
        this.channel.leave();
    }
    add(url) {
        return new Promise((resolve, reject) => {
            ytdl
                .getInfo(url, {}, (err, info) => {
                    if (err) {
                        reject(err);
                    } else {
                        const item = {
                            url: url,
                            name: info.title
                        };

                        this.queue.push(item);

                        if (!this.playing) {
                            this.next();
                        }

                        resolve(item);
                    }
                });
        });
    }
    next() {
        if (this.queue.length > 0) {
            this.current = this.queue.shift();
            this.play();

            return true;
        } else {
            this.destroy();

            return false;
        }
    }
    play() {
        const stream = ytdl(this.current.url);
        let dispatcher = this.connection.playStream(stream);

        this.playing = true;

        console.log("oooo", stream, dispatcher);

        dispatcher.once("end", (ev) => {
            dispatcher = null;
            console.log("AAAAAAAA", ev);
            this.playing = false;
            this.next();
        });
    }
};
