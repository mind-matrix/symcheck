const { Disease, Symptom } = require('./model');
const { Router } = require('express');
const { ObjectId } = require('mongoose').Types;

const api = Router();

api.get('/symptoms', async function (req, res) {
    Symptom.find({}, (err, symptoms) => {
        if (err) {
            res.status(500).send('Server Error - Error Code 01');
        } else {
            res.send(symptoms);
        }
    });
});

api.post('/diseases', async function (req, res) {
    let { ids } = req.body;
    if (ids) {
        Disease.find({
            symptoms: {
                $all: ids.map(id => ObjectId(id))
            }
        }).populate('symptoms').exec((err, diseases) => {
            if (err) {
                res.status(500).send('Server Error - Error Code 02');
            } else {
                res.send(diseases);
            }
        });
    } else {
        res.status(404).send('No ids provided');
    }
});

module.exports = api;