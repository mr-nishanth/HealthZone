const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '..', 'config', 'config.env') });
//* Above imports is mandatory to run Database connection [get the environment variables]
const connectDB = require('../helpers/databases');

connectDB();

const products = require('../data/products.json');
const Product = require('../models/product.model');

const seedProducts = async () => {
    try {
        await Product.deleteMany({}).exec();
        console.log(`➖➖ All Products ➖➖ \n`);
        await Product.insertMany(products);
        console.log(`➕➕ All Products ➕➕ `);
    } catch (error) {
        console.log(error.message);
    }
    process.exit();
};

seedProducts();
