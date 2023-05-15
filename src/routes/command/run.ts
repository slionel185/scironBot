import type { Request, Response } from 'express'

import { prisma } from '@/utils/db'

import forceCommandHandler from '@/handlers/forceCommandHandler'

import type Command from '@/types/command'

const run = async (req: Request, res: Response) => {
    const { channel, commandId } = req.body

    console.log('Running')

    try {
        const command = await prisma.command.findFirst({
            where: {
                id: commandId
            }
        })

        if(command) forceCommandHandler(channel, command as unknown as Command)

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