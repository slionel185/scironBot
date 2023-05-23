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
const chat_1 = __importDefault(require("../controllers/actions/chat"));
const commercial_1 = __importDefault(require("../controllers/actions/commercial"));
const forceCommandHandler = (channel, command, user, args) => __awaiter(void 0, void 0, void 0, function* () {
    if (command.commandAction === 'REPLY' && command.commandReply)
        return server_1.bot.say(channel, command.commandReply);
    if (command.commandAction === 'ACTION' && command.actionType) {
        if (command.actionType === 'CHAT')
            return (0, chat_1.default)(channel, command);
        if (command.actionType === 'COMMERCIAL')
            return yield (0, commercial_1.default)(channel);
    }
});
exports.default = forceCommandHandler;
