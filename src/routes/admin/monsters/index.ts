import express from 'express'

import race from './race'
import rank from './rank'

const router = express.Router()

router.use('/race', race)
router.use('/rank', rank)

export default router
