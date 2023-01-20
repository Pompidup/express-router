import express from 'express'
import router from './router.js'

let connection

const defineRoutes = (app) => {
  app.use(router)
}

const initializeWebServer = () => new Promise((resolve, _reject) => {
  const app = express()
  // parse application/json
  app.use(express.json({ type: ['json', 'application/*+json'] }))
  // ROUTING
  defineRoutes(app)
  // PORT
  app.listen(3000, () => {
    console.log('Server started on port 3000')
    resolve()
  })
})

const stopWebServer = () => new Promise((resolve, _reject) => {
  connection.close(() => {
    resolve()
  })
})

process.on('uncaughtException', err => { log.error(err); process.exit(1) })
process.on('unhandledRejection', err => { log.error(err); process.exit(1) })

export default {
  initializeWebServer,
  stopWebServer,
}
