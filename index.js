require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const { connect } = require('mongoose');
const api_v1 = require('./app/v1');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(json());

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