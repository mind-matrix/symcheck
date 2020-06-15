const { Schema, model } = require('mongoose');

const symptomSchema = new Schema({
    description: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: { createdAt: true } });

module.exports = model('Symptom', symptomSchema);