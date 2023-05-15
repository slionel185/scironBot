"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// * import BOT routes
// ! GET
const getChannels_1 = __importDefault(require("./bot/getChannels"));
// ! POST
const join_1 = __importDefault(require("./bot/join"));
const part_1 = __importDefault(require("./bot/part"));
// * use BOT routes
// ! GET
router.get('/bot/info/channels', getChannels_1.default);
// ! POST
router.post('/bot/join', join_1.default);
router.post('/bot/part', part_1.default);
// * import COMMAND routes
const run_1 = __importDefault(require("./command/run"));
// * use COMMAND routes
// ! POST
router.post('/command/run', run_1.default);
exports.default = router;
