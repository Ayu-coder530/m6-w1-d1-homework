const Inventory = require('./inventory.model');

// Create and save a new inventory
exports.createInventory = (req, res) => {
    const inventory = new Inventory({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price
    });

    inventory.save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Some error occurred while creating the inventory."
        }));
};

// Retrieve a single inventory by ID
exports.getInventory = (req, res) => {
    Inventory.findById(req.params.id)
        .then(inventory => {
            if (!inventory) {
                return res.status(404).send({
                    message: "Inventory not found with id " + req.params.id
                });
            }
            res.send(inventory);
        })
        .catch(err => res.status(500).send({
            message: "Error retrieving inventory with id " + req.params.id
        }));
};

// Retrieve all inventories
exports.inventories = (req, res) => {
    Inventory.find()
        .then(inventories => res.send(inventories))
        .catch(err => res.status(500).send({
            message: err.message || "Some error occurred while retrieving inventories."
        }));
};

// Update an inventory by ID
exports.updateInventory = (req, res) => {
    Inventory.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price
    }, { new: true })
        .then(inventory => {
            if (!inventory) {
                return res.status(404).send({
                    message: "Inventory not found with id " + req.params.id
                });
            }
            res.send(inventory);
        })
        .catch(err => res.status(500).send({
            message: "Error updating inventory with id " + req.params.id
        }));
};

// Delete an inventory by ID
exports.deleteInventory = (req, res) => {
    Inventory.findByIdAndRemove(req.params.id)
        .then(inventory => {
            if (!inventory) {
                return res.status(404).send({
                    message: "Inventory not found with id " + req.params.id
                });
            }
            res.send({ message: "Inventory deleted successfully!" });
        })
        .catch(err => res.status(500).send({
            message: "Could not delete inventory with id " + req.params.id
        }));
};
