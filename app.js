// importo express
const express = require(`express`);

// inizializzo express nella variabile app
const app = express();

// definiamo la porta
const port = 3000;

// indico ad express di trattare i body delle richieste come json
app.use(express.json());

// importo il router
const postRouter = require(`./router/posts.js`);

// utilizzo il router definire le varie rotte per i post
app.use(`/post`, postRouter);

// definizione rotta base
app.get(`/`, (req, res) => {
    res.send(`Homepage`);
})

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
})