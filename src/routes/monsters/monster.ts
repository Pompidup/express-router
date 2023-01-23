import express from 'express'
import create from '../../services/monster/create'

const router = express.Router()

router.post('/', (req, res) => {
    try {
        const monster = create(req.body)
        res.status(200).json(monster)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

export default router