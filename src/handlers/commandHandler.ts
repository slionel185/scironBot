import type { ChatUserstate } from 'tmi.js'
import type { User, Command } from '@prisma/client'

import { bot } from '@/server'
import chat from '@/controllers/actions/chat'
import commercial from '@/controllers/actions/commercial'

const commandHandler = async (channel: string, tags: ChatUserstate, message: string, user: User, commands: Command[]) => {
    const commandName: string = message.split(user.commandPrefix)[1].split(' ')[0].toLowerCase()
    const args: string[] = message.split(' ').slice(1)

    const filterByCommand = (name: string, item: Command) => {
        if(item.name === name) return true
        return false
    }

    const filteredCommands: Command[] = commands.filter(commandItem => filterByCommand(commandName, commandItem))
    const command: Command = filteredCommands[0]

    try {
        if(filteredCommands.length < 1 && (tags.username === channel.split('#')[1] || tags.mod)) return bot.say(channel, 'No commands found with that name.') 
        if(filteredCommands.length > 1 && (tags.username === channel.split('#')[1] || tags.mod)) return bot.say(channel, 'You have too many commands with the same name.')

        if(!command.active && (tags.username === channel.split('#')[1] || tags.mod)) return bot.say(channel, 'This command is not active. You can activate it on your Sciron dashboard!')

        if((command.commandUserLevel === 'MODERATOR' || command.commandUserLevel === 'BROADCASTER') && (!tags.mod || tags.username !== channel.split('#')[1])) return bot.say(channel, 'Elevated priviledges needed for that command.')

        if(command.commandAction === 'REPLY' && command.commandReply) bot.say(channel, command.commandReply)

        if(command.commandAction === 'ACTION' && command.actionType) {
            if(command.actionType === 'CHAT') return chat(channel, command)
            if(command.actionType === 'COMMERCIAL') return commercial(channel)
        }

    } catch(err: any) {
        bot.say(channel, 'Oops that broke something!')
    }
}

export default commandHandler