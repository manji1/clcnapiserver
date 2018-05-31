const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Questionnaire = new Schema({
    id: {type: Number, require: true, unique: true},
    title: {type: String, require: true},
    authorId: {type: Number, require: true},
    questions: {
        no: {type: Number, require: true, unique: true},
        type: {type: Number, require: true},
        question: {type: String, require: true},
        choices: {
            id: {type: Number, require: true, unique: true},
            answer: {type: String},
            img_path: {type: String}
        }
    }
});

module.exports = mongoose.model('questionnaire', Questionnaire);