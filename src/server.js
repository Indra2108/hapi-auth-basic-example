'use strict'

const Hapi = require('@hapi/hapi')

const plugins = require('./plugin')
const routes = require('./routes')
const validate = require('./validation')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    await server.register(plugins)

    server.auth.strategy('simple', 'basic', { validate })
    server.auth.default('simple')

    server.route(routes)

    await server.start()
    console.debug('server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {
    console.debug(err)
    process.exit(1)
})

init()

