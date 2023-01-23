import express from 'express'

const router = express.Router()

router.use('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
})

export default router
