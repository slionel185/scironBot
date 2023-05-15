"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const tmi_js_1 = require("tmi.js");
const _env_1 = require("./env.js");
const messageHandler_1 = __importDefault(require("./handlers/messageHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const router_1 = __importDefault(require("./routes/router"));
app.use('/api/v1', router_1.default);
exports.bot = new tmi_js_1.Client({
    options: { debug: true, },
    identity: { username: 'Scironbot', password: _env_1.env.TWITCH_PASSWORD }
});
exports.bot.connect().catch((err) => {
    throw new Error(err);
});
exports.bot.on('message', messageHandler_1.default);
app.listen(_env_1.env.PORT, () => console.log(`Server listening on Port: ${_env_1.env.PORT}`));
//https.createServer({ key: fs.readFileSync(path.join(__dirname, 'certs', 'server.key')), cert: fs.readFileSync(path.join(__dirname, 'certs', 'server.cert')) }, app).listen(env.PORT, () => console.log(`Server listening on Port: ${env.PORT}`))
exports.default = app;
