require('dotenv').config({ path: '../../../.env' });
const { Disease, Symptom } = require('../model');
const { connect } = require('mongoose');
const { parseFile } = require('fast-csv');

connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {

    let symptoms = [];
    let diseases = {};

    parseFile('List of Conditions.csv')
    .on('error', error => console.error(error))
    .on('data', row => {
        let name = row[0].trim().toLowerCase();
        diseases[name] = {
            symptoms: []
        };
    })
    .on('end', (rowCount) => {
        console.log(`Parsed ${rowCount} Conditions`);
        parseFile('List of Symtoms.csv', { headers: true })
        .on('data', async (row) => {
            symptoms.push(row['Description']);
            let symptom = new Symptom({
                description: row['Description']
            });
            await symptom.save();
            for(let [k, v] of Object.entries(row)) {
                let name = k.trim().toLowerCase();
                if (v === 'Y' && diseases.hasOwnProperty(name)) {
                    diseases[name].symptoms.push(symptom.id);
                }
            }
        })
        .on('end', async (rowCount) => {
            console.log(`Parsed ${rowCount} Symptoms`);
            for(let [k, v] of Object.entries(diseases)) {
                let name = k.trim().toLowerCase();
                let disease = new Disease({
                    name,
                    symptoms: v.symptoms
                });
                await disease.save();
            }
            console.log('Done.');
        });
    });
});