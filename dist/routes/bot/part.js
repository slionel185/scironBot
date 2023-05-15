"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../server");
const part = (req, res) => {
    const channel = req.body.channel;
    try {
        server_1.bot.part(channel);
        return res.json({
            status: 200,
            message: `Bot parted ${channel} successfully.`
        });
    }
    catch (err) {
        return res.json({
            status: 500,
            message: 'Bot failed to part.'
        });
    }
};
exports.default = part;
