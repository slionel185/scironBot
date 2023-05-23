import type { User, Command } from '@prisma/client'

import { bot } from '@/server'

const chat = async (channel: string, command: Command) => {
    const chatArgs = command

    console.log(chatArgs)
}

export default chat