import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
    isServer: typeof window === "undefined",
    client: {},
    clientPrefix: 'PUBLIC_',
    server: {
        PORT: z.string(),
        NODE_ENV: z.enum(['production', 'development', 'test']),
        TWITCH_CLIENT_ID: z.string(),
        TWITCH_CLIENT_SECRET: z.string(),
        TWITCH_PASSWORD: z.string()
    },
    runtimeEnv: process.env
})