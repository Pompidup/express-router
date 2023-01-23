import express from 'express'
import { IncomingMessage, Server, ServerResponse } from 'http'
import { AddressInfo } from 'net'
import router from './router'

let connection: Server<typeof IncomingMessage, typeof ServerResponse>

const defineRoutes = (app: express.Application) => {
  app.use(router)
}

const initializeWebServer = ():
Promise<string | AddressInfo | null> => new Promise((resolve, _reject) => {
  const app: express.Application = express()
  // SECURITY
  app.disable('x-powered-by')

  // parse application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: false }))

  // parse application/json
  app.use(express.json({ type: ['json', 'application/*+json'] }))

  // ROUTING
  defineRoutes(app)

  // PORT
  const webServerPort = process.env.NODE_ENV !== 'test' ? process.env.PORT : null
  connection = app.listen(webServerPort, () => {
    resolve(connection.address())
  })
})

const stopWebServer = (): Promise<void> => new Promise((resolve, _reject) => {
  connection.close(() => {
    resolve()
  })
})

process.on('uncaughtException', err => { console.error(err); process.exit(1) })
process.on('unhandledRejection', err => { console.error(err); process.exit(1) })

export default {
  initializeWebServer,
  stopWebServer,
}
