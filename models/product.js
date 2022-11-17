const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema=new Schema({

    productId:{

    },
    productName:{
        type: 'string',
        required: true
    },

    productDescription:{
        type: 'string',
        required: true
    },
    quantity: {
        type: 'number',
        required: false,
        default: 1
    }
})

const Product = mongoose.model('products', ProductSchema);
module.exports = Product; 