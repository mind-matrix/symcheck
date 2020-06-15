require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const { connect } = require('mongoose');
const api_v1 = require('./app/v1');

const app = express();

app.use(json());

app.use(express.static('public/v1'));

app.use('/v1', api_v1);

connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    let listener = app.listen(process.env.PORT, () => {
        console.log(`Server has started listening on port: ${ listener.address().port }`);
    });
});