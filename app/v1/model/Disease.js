const { Schema, model } = require('mongoose');

const diseaseSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    symptoms: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Symptom'
        }],
        index: true
    }
}, { timestamps: { createdAt: true, updatedAt: true } });

module.exports = model('Disease', diseaseSchema);