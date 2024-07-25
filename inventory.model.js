const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Inventory', InventorySchema);
