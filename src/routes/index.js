const getUsers = require("../handler/GET_USERS")
const register = require("../handler/REGISTER")

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Assalamu\'alaykum Dunia!'
        }
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Nyasar euuyyy!!'
        }
    },
    {
        method: 'POST',
        path: '/register',
        handler: register,
        options: {
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/getUsers',
        handler: getUsers,
        options: {
            auth: false
        }
    },
]

module.exports = routes