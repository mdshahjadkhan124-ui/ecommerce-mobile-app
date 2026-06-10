const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new product
// @route   POST /api/products
const createProduct = async (req, res) => {
    const { title, description, price, image, category, rating } = req.body;

    try {
        const product = new Product({
            title,
            description,
            price,
            image,
            category,
            rating
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Check karein: Dono functions sahi se export ho rahe hain na?
module.exports = { getProducts, createProduct };