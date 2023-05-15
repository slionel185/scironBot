import type { ChatUserstate } from 'tmi.js'

import { prisma } from '@/utils/db'

import commandHandler from '@/handlers/commandHandler'
import { bot } from '@/server'

const messageHandler = async (channel: string, tags: ChatUserstate, message: string, self: boolean) => {
    if(self) return

    const CHANNEL_NAME = channel.split('#')[1]
    const CHANNEL_USER = await prisma.user.findFirst({ where: { name: { equals: CHANNEL_NAME, mode: 'insensitive' }}})
    const CHANNEL_COMMANDS = await prisma.command.findMany({ where: { userId: CHANNEL_USER?.id}})

    if(!CHANNEL_USER) return console.log('No channel account found. Nothing can be done.')

    if(message.startsWith(CHANNEL_USER.commandPrefix)) commandHandler(channel, tags, message, CHANNEL_USER, CHANNEL_COMMANDS)
}

export default messageHandler