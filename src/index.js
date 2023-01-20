import Server from './server.js'

const start = async () => {
    await Server.initializeWebServer()
}

start()
    .then(() => {
        console.log(`⚡️[server]: Server is running at http://localhost:3000`)
    })
    .catch(err => {
        console.error(err)
    })
