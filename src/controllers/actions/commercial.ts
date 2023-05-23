import { bot } from '@/server'

const commercial = async (channel: string) => {
    try {
        await bot.commercial(channel, 60)
    } catch(err: any) {
        bot.say(channel, 'Error running command on this channel.')
    }
}

export default commercial