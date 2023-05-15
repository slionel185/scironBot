import type { Request, Response } from 'express'

import { bot } from '@/server'

const join = (req: Request, res: Response) => {
    try {
        const channel = req.body.channel

        bot.join(channel)

        return res.json({
            status: 200,
            message: `Bot joined ${channel} successfully.`
        })
    } catch(err: any) {
        return res.json({
            status: 500,
            message: 'Bot failed to join.'
        })
    }
}

export default join