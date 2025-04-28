// importo express
const express = require(`express`);

// importo la classe router di express
const router = express.Router();

// Definizione delle rotte per i post

// index
router.get(`/`, (req, res) => {
    res.send(`Elenco dei post`);
})

// show
router.get(`/:id`, (req, res) => {
    res.send(`Post con id: ${req.params.id}`);
})

// store
router.post(`/`, (req, res) => {
    res.send(`Inserimento di un nuovo post`);
})

// update
router.put(`/:id`, (req, res) =>{
    res.send(`Modifica totale del post con id: ${req.params.id}`);
})

// modify
router.patch(`/:id`, (req, res) => {
    res.send(`Modifica parziale del post con id: ${req.params.id}`);
})

// destroy
router.delete(`/:id`, (req, res) => {
    res.send (`Cancellazione del post con id: ${req.params.id}`);
})

// esporto il router
module.exports = router;