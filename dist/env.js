"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const env_core_1 = require("@t3-oss/env-core");
const zod_1 = require("zod");
exports.env = (0, env_core_1.createEnv)({
    isServer: typeof window === "undefined",
    client: {},
    clientPrefix: 'PUBLIC_',
    server: {
        PORT: zod_1.z.string(),
        NODE_ENV: zod_1.z.enum(['production', 'development', 'test']),
        TWITCH_CLIENT_ID: zod_1.z.string(),
        TWITCH_CLIENT_SECRET: zod_1.z.string(),
        TWITCH_PASSWORD: zod_1.z.string()
    },
    runtimeEnv: process.env
});
