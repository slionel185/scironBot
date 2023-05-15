import type { Request, Response } from 'express'

import { bot } from '@/server'

const part = (req: Request, res: Response) => {
    const channel = req.body.channel

    try {
        bot.part(channel)

        return res.json({
            status: 200,
            message: `Bot parted ${channel} successfully.`
        })
    } catch(err: any) {
        return res.json({
            status: 500,
            message: 'Bot failed to part.'
        })
    }
}

export default part