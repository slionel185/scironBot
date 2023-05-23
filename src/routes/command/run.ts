import type { Command } from '@prisma/client'
import type { Request, Response } from 'express'

import { prisma } from '@/utils/db'

import forceCommandHandler from '@/handlers/forceCommandHandler'

const run = async (req: Request, res: Response) => {
    const { channel, commandId, args } = req.body

    try {
        const command = await prisma.command.findFirst({
            where: {
                id: commandId
            },
            include: {
                User: true
            }
        })

        if(!command) return res.json({
            status: 404
        })

        if(command) forceCommandHandler(channel, command as Command, command.User, args)

        return res.json({
            status: 200
        })
    } catch(err: any) {
        return res.json({
            status: 500
        })
    }
}

export default run