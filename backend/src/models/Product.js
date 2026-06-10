const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String, // Yahan product image ka web URL string store hoga
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        rate: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);