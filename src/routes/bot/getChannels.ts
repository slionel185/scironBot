import type { Request, Response } from 'express'

import { bot } from '@/server'

const getChannels = (req: Request, res: Response) => {
    try {
        const channels = bot.getChannels()

        return res.json({
            status: 200,
            message: channels
        })
    } catch(err: any) {
        return res.json({
            status: 500,
            message: 'An error occurred fetching that info.'
        })
    }
}

export default getChannels