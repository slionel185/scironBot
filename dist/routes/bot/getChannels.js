"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../server");
const getChannels = (req, res) => {
    try {
        const channels = server_1.bot.getChannels();
        return res.json({
            status: 200,
            message: channels
        });
    }
    catch (err) {
        return res.json({
            status: 500,
            message: 'An error occurred fetching that info.'
        });
    }
};
exports.default = getChannels;
