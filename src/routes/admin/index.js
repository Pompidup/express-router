import express from 'express'
import adminRouter from './monsters'
import statRouter from './stat'

const router = express.Router()

router.use('/monsters', adminRouter)
router.use('/stat', statRouter)

export default router
