import { Router } from 'express'
import technologiesRouter from './technologies'
import userRouter from './users'
import userRequestRouter from './userRequests'

const router = Router()

router.use('/technologies', technologiesRouter)
router.use('/users', userRouter)
router.use('/userRequests', userRequestRouter)

export default router