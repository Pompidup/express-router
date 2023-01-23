import Server from './server'

const start = async (): Promise<void> => {
    await Server.initializeWebServer()
}

start()
    .then(() => {
        const env = process.env.NODE_ENV
        console.log(`⚡️[server]: Server is running in ${env} mode`)
    })
    .catch(err => {
        console.error(err)
    })
