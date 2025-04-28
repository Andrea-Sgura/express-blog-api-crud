// importo express
const express = require(`express`);

// inizializzo express nella variabile app
const app = express();

// definiamo la porta
const port = 3000;

// definizione rotta base
app.get(`/`, (req, res) => {
    res.send(`Homepage`);
})

app.listen(port, () => {
    console.log(`Server in ascolto nella porta ${port}`);
})