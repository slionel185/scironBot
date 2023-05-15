"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../server");
const join = (req, res) => {
    try {
        const channel = req.body.channel;
        server_1.bot.join(channel);
        return res.json({
            status: 200,
            message: `Bot joined ${channel} successfully.`
        });
    }
    catch (err) {
        return res.json({
            status: 500,
            message: 'Bot failed to join.'
        });
    }
};
exports.default = join;
