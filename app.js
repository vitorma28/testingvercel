const express = require('express');
const path = require('path');
const app = express();

const mainPage = path.join(__dirname, 'index.html');

app.get('/', (req, res) => {
    res.sendFile(mainPage);
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080.');
});