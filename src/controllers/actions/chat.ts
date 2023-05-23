import type { User, Command } from '@prisma/client'

import { bot } from '@/server'

const chat = async (channel: string, command: Command) => {
    const args = command.args.split(' ')

    try {
        await bot.slowoff(channel)
        await bot.emoteonlyoff(channel)
        await bot.subscribersoff(channel)
        await bot.followersonlyoff(channel)

        switch (args[0]) {
            case 'SLOW': return bot.slow(channel)
            case 'EMOTE': return bot.emoteonly(channel)
            case 'FOLLOWERS': return bot.followersonly(channel)
            case 'SUBSCRIBERS': return bot.subscribers(channel)
            case 'NORMAL': return
        }

    } catch(err) {
        await bot.say(channel, 'There was an error -_- I might fix it later.')
    }
}

export default chat