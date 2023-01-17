const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const loginRoutes = require('./routes/login');
const msgRoutes = require('./routes/message');


app.use(loginRoutes);
app.use(msgRoutes);


app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
