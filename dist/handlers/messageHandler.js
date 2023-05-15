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
const db_1 = require("../utils/db");
const commandHandler_1 = __importDefault(require("./commandHandler"));
const messageHandler = (channel, tags, message, self) => __awaiter(void 0, void 0, void 0, function* () {
    if (self)
        return;
    const CHANNEL_NAME = channel.split('#')[1];
    const CHANNEL_USER = yield db_1.prisma.user.findFirst({ where: { name: { equals: CHANNEL_NAME, mode: 'insensitive' } } });
    const CHANNEL_COMMANDS = yield db_1.prisma.command.findMany({ where: { userId: CHANNEL_USER === null || CHANNEL_USER === void 0 ? void 0 : CHANNEL_USER.id } });
    if (!CHANNEL_USER)
        return console.log('No channel account found. Nothing can be done.');
    if (message.startsWith(CHANNEL_USER.commandPrefix))
        (0, commandHandler_1.default)(channel, tags, message, CHANNEL_USER, CHANNEL_COMMANDS);
});
exports.default = messageHandler;
