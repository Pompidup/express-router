import express from 'express'

import friends from './friends'
import monster from './monster'

const router = express.Router()

router.use('/', monster)
router.use('/friends', friends)

export default router
