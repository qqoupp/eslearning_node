import { Router } from 'express'
import technologiesRouter from './technologies'

const router = Router()

router.use('/technologies', technologiesRouter)

export default router