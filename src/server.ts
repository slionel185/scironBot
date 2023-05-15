import fs from 'fs'
import path from 'path'
import cors from 'cors'
import https from 'https'
import helmet from 'helmet'
import morgan from 'morgan'
import express from 'express'

import { Client } from 'tmi.js'

import type { Express } from 'express'

import { env } from '@env'
import messageHandler from '@/handlers/messageHandler'

const app: Express = express()

app.use(cors())

app.use(helmet())
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

import router from '@/routes/router'
app.use('/api/v1', router)

export const bot = new Client({
    options: { debug: true, },
    identity: { username: 'Scironbot', password: env.TWITCH_PASSWORD }
})

bot.connect().catch((err: any) => {
    throw new Error(err)
})

bot.on('message', messageHandler)

app.listen(env.PORT, () => console.log(`Server listening on Port: ${env.PORT}`))
//https.createServer({ key: fs.readFileSync(path.join(__dirname, 'certs', 'server.key')), cert: fs.readFileSync(path.join(__dirname, 'certs', 'server.cert')) }, app).listen(env.PORT, () => console.log(`Server listening on Port: ${env.PORT}`))

export default app