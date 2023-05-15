"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
const forceCommandHandler = (channel, command) => {
    if (command.commandAction === 'REPLY' && command.commandReply)
        return server_1.bot.say(channel, command.commandReply);
    if (command.commandAction === 'ACTION' && command.actionType) {
        if (command.actionType === 'COMMERCIAL')
            server_1.bot.commercial(channel, 60).catch(() => server_1.bot.say(channel, 'There seemed to be an issue with that.'));
    }
};
exports.default = forceCommandHandler;
