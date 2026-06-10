const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    // Yeh function user ID ko process karke ek 30-days valid token banayega
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

module.exports = generateToken;