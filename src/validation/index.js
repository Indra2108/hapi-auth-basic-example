const Bcrypt = require('bcrypt')
const User = require('../models')

const validate = async (request, username, password, h) => {
    const user = await User.findOne({ where: { username } })

    if (!user) {
        return { isValid: false, credentials: null }
    }

    const isValid = Bcrypt.compareSync(password, user.password)
    const credentials = { id: user.id, name: user.username }

    return { isValid, credentials }
}

module.exports = validate