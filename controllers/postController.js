const posts = require (`../data/posts.js`);

// index
function index (req, res){
    res.json(posts);
}

// show
function show (req, res) {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => {
        return post.id == id;
    })

    res.json(post);
}

// store
function store (req, res) {
    res.send(`Inserimento di un nuovo post`);
}

// update
function update (req, res) {
    res.send (`Modifica totale del post con id: ${req.params.id}`);
}

// modify
function modify (req, res) {
    res.send (`Modifica parziale del post con id: ${req.params.id}`);
}

// destroy
function destroy (req, res) {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    posts.splice(posts.indexOf(post), 1);

    // restituisco il codice di stato 204
    res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy};