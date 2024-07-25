const express = require('express');
const router = express.Router();
const inventoryController = require('./inventory.controller');

// Create a new inventory
router.post('/api/inventory', inventoryController.createInventory);

// Retrieve a single inventory by ID
router.get('/api/inventory/:id', inventoryController.getInventory);

// Retrieve all inventories
router.get('/api/inventories', inventoryController.inventories);

// Update an inventory by ID
router.put('/api/inventory/:id', inventoryController.updateInventory);

// Delete an inventory by ID
router.delete('/api/inventory/:id', inventoryController.deleteInventory);

module.exports = router;
