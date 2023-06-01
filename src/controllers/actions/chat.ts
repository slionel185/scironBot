import type { User, Command } from '@prisma/client'

import { bot } from '@/server'

const chat = async (channel: string, command: Command, user: User) => {
    const args = command.args.split(' ')
    const current = user.chatMode

    try {

        if(args[0] === current) return

        switch(current) {
            case 'NORMAL': return
            case 'SLOW': return bot.slowoff(channel)
            case 'SUB_ONLY': return bot.subscribersoff(channel)
            case 'EMOTE_ONLY': return bot.emoteonlyoff(channel)
            case 'FOLLOWER_ONLY': return bot.followersonlyoff(channel)
        }

        switch (args[0]) {
            case 'NORMAL': return
            case 'SLOW': return bot.slow(channel)
            case 'EMOTE': return bot.emoteonly(channel)
            case 'FOLLOWERS': return bot.followersonly(channel)
            case 'SUBSCRIBERS': return bot.subscribers(channel)
        }

    } catch(err) {
        await bot.say(channel, 'There was an error -_- I might fix it later.')
    }
}

export default chat