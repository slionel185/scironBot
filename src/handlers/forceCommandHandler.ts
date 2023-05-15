import Command from '@/types/command'

import { bot } from '@/server'

const forceCommandHandler = (channel: string, command: Command) => {
    if(command.commandAction === 'REPLY' && command.commandReply) return bot.say(channel, command.commandReply)

    if(command.commandAction === 'ACTION' && command.actionType) {
        if(command.actionType === 'COMMERCIAL') bot.commercial(channel, 60).catch(() => bot.say(channel, 'There seemed to be an issue with that.'))
    }
}

export default forceCommandHandler