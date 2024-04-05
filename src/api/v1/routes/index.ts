import { Router } from 'express'
import technologiesRouter from './technologies'
import userRouter from './users'
import userRequestRouter from './userRequests'
import llmRequestRouter from './llm'
import tokenRouter from './tokens'
import projectIdeasRouter from './projectIdeeas'

const router = Router()

router.use('/technologies', technologiesRouter)
router.use('/users', userRouter)
router.use('/userRequests', userRequestRouter)
router.use('/llm', llmRequestRouter)
router.use('/tokens', tokenRouter)
router.use('/projectIdeas', projectIdeasRouter)


export default router