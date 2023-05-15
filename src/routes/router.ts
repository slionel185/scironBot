import { Router } from 'express'

const router: Router = Router()

// * import BOT routes
// ! GET
import getChannels from '@/routes/bot/getChannels'

// ! POST
import join from '@/routes/bot/join'
import part from '@/routes/bot/part'

// * use BOT routes
// ! GET
router.get('/bot/info/channels', getChannels)

// ! POST
router.post('/bot/join', join)
router.post('/bot/part', part)

// * import COMMAND routes
import run from '@/routes/command/run'

// * use COMMAND routes
// ! POST
router.post('/command/run', run)

export default router