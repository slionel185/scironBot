"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../server");
const commercial = (channel) => {
    try {
        server_1.bot.commercial(channel, 60);
    }
    catch (err) {
        server_1.bot.say(channel, 'Error running command on this channel.');
    }
};
exports.default = commercial;
