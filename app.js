// importo express
const express = require(`express`);

// inizializzo express nella variabile app
const app = express();

// definiamo la porta
const port = 3000;

app.get(`/`, (req, res) => {
    console.log(`Hello world`);
})

app.listen(port, () => {
    console.log(`Server in ascolto nella porta ${port}`);
})