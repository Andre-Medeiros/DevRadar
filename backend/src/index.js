const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://andre:a761744551@cluster0-jk2aa.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors("http://localhost:3000"));
app.use(express.json());
app.use(routes);

app.listen(3333);