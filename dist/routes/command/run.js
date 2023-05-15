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
const db_1 = require("../../utils/db");
const forceCommandHandler_1 = __importDefault(require("../../handlers/forceCommandHandler"));
const run = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { channel, commandId } = req.body;
    console.log('Running');
    try {
        const command = yield db_1.prisma.command.findFirst({
            where: {
                id: commandId
            }
        });
        if (command)
            (0, forceCommandHandler_1.default)(channel, command);
        return res.json({
            status: 200
        });
    }
    catch (err) {
        return res.json({
            status: 500
        });
    }
});
exports.default = run;
