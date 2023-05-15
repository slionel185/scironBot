"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
const commercial_1 = __importDefault(require("../controllers/actions/commercial"));
const commandHandler = (channel, tags, message, user, commands) => __awaiter(void 0, void 0, void 0, function* () {
    const commandName = message.split(user.commandPrefix)[1].split(' ')[0].toLowerCase();
    const args = message.split(' ').slice(1);
    const filterByCommand = (name, item) => {
        if (item.name === name)
            return true;
        return false;
    };
    const filteredCommands = commands.filter(commandItem => filterByCommand(commandName, commandItem));
    const command = filteredCommands[0];
    try {
        if (filteredCommands.length < 1 && (tags.username === channel.split('#')[1] || tags.mod))
            return server_1.bot.say(channel, 'No commands found with that name.');
        if (filteredCommands.length > 1 && (tags.username === channel.split('#')[1] || tags.mod))
            return server_1.bot.say(channel, 'You have too many commands with the same name.');
        if (!command.active && (tags.username === channel.split('#')[1] || tags.mod))
            return server_1.bot.say(channel, 'This command is not active. You can activate it on your Sciron dashboard!');
        if ((command.commandUserLevel === 'MODERATOR' || command.commandUserLevel === 'BROADCASTER') && (!tags.mod || tags.username !== channel.split('#')[1]))
            return server_1.bot.say(channel, 'Elevated priviledges needed for that command.');
        if (command.commandAction === 'REPLY' && command.commandReply)
            server_1.bot.say(channel, command.commandReply);
        if (command.commandAction === 'ACTION' && command.actionType) {
            if (command.actionType === 'COMMERCIAL')
                return (0, commercial_1.default)(channel);
        }
    }
    catch (err) {
        server_1.bot.say(channel, 'Oops that broke something!');
    }
});
exports.default = commandHandler;
