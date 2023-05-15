type Command = {
    id: string,
    active: boolean,
    name: string,
    userId: string,
    commandReply?: string,
    actionType?: 'COMMERCIAL'
    commandAction: 'REPLY' | 'ACTION',
    commandUserLevel: 'USER' | 'MODERATOR' | 'BROADCASTER',
}

export default Command