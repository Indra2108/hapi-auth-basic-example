const User = require("../models")
const Bcrypt = require('bcrypt')

const register = async (request, h) => {
    try {
        const { username, password } = request.payload

        if (username === '' || password === '') {
            return {
                message: 'Isi data dengan benar!'
            }
        }

        const hash = Bcrypt.hashSync(password, 8)

        await User.create({
            username,
            password: hash
        })

        const response = h.response({
            status: 'success',
            message: 'Registrasi Berhasil!'
        }).code(201)
        return response

    } catch (error) {
        console.error(error)
        const response = h.response({
            status: 'fail',
            message: 'Registrasi Gagal!. Error Internal Server!'
        }).code(500)
        return response
    }
}

module.exports = register