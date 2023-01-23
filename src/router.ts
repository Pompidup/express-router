import express from 'express'
import {
    adminRouter,
    authRouter,
    monstersRouter,
} from './routes'

const router = express.Router()

router.use('/admin', adminRouter)
router.use('/auth', authRouter)
router.use('/monsters', monstersRouter)


export default router
