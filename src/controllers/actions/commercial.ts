import { bot } from '@/server'

const commercial = (channel: string) => {
    try {
        bot.commercial(channel, 60)
    } catch(err: any) {
        bot.say(channel, 'Error running command on this channel.')
    }
}

export default commercial