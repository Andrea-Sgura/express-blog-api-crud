// importo express
const express = require(`express`);

// importo la classe router di express
const router = express.Router();

// importo il controller
const postController = require(`../controllers/postController.js`);

// Definizione delle rotte per i post

// index
router.get(`/`, postController.index);

// show
router.get(`/:id`, postController.show);

// store
router.post(`/`, postController.store);

// update
router.put(`/:id`, postController.update);

// modify
router.patch(`/:id`, postController.modify);

// destroy
router.delete(`/:id`, postController.destroy);

// esporto il router
module.exports = router;