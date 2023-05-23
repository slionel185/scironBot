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
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../server");
const chat = (channel, command) => __awaiter(void 0, void 0, void 0, function* () {
    const args = command.args.split(' ');
    try {
        yield server_1.bot.slowoff(channel);
        yield server_1.bot.emoteonlyoff(channel);
        yield server_1.bot.subscribersoff(channel);
        yield server_1.bot.followersonlyoff(channel);
        switch (args[0]) {
            case 'SLOW': return server_1.bot.slow(channel);
            case 'EMOTE': return server_1.bot.emoteonly(channel);
            case 'FOLLOWERS': return server_1.bot.followersonly(channel);
            case 'SUBSCRIBERS': return server_1.bot.subscribers(channel);
            case 'NORMAL': return;
        }
    }
    catch (err) {
        yield server_1.bot.say(channel, 'There was an error -_- I might fix it later.');
    }
});
exports.default = chat;
