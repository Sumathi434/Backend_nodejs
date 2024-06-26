const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,

    },
    category: {
        type: [
            {
                type: String,
                enum: ["Veg", "Non-veg"]
            }
        ]
    },
    image: {
        type: String,
    },
    bestseller: {
        type: Boolean,
    },
    description: {
        type: String,
    },
    firm: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm'
    }]
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product