import type { Command, User } from '@prisma/client'

import { bot } from '@/server'

import chat from '@/controllers/actions/chat'
import commercial from '@/controllers/actions/commercial'

const forceCommandHandler = async (channel: string, command: Command, user: User, args: string[]) => {
    if(command.commandAction === 'REPLY' && command.commandReply) return bot.say(channel, command.commandReply)

    if(command.commandAction === 'ACTION' && command.actionType) {
        if(command.actionType === 'CHAT') return chat(channel, command)
        if(command.actionType === 'COMMERCIAL') return await commercial(channel)
    }
}

export default forceCommandHandler