const User = require("../models")

const getUsers = async (request, h) => {
    const allusers = await User.findAll()

    const response = h.response({
        status: 'success',
        data: allusers
    })
    response.code(201)
    return response
}

module.exports = getUsers