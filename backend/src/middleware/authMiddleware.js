const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    // Check karein ki headers mein Bearer token aa raha hai ya nahi
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Token ko "Bearer <TOKEN>" se alag karein
            token = req.headers.authorization.split(' ')[1];

            // Token ko verify karein env secret key se
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Database se user nikal kar request object mein attach karein (bina password ke)
            req.user = await User.findById(decoded.id).select('-password');

            // Agle function/controller par bhejein
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protect };