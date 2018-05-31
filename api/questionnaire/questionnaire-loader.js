const mongoose = require('mongoose');
const Questionnaire = require('api/schema/questionnaire');

module.exports = (req, res) => {
    const load = (req, res) => {
        const id = req.body.id;
        const title = req.body.title;
        const authorId = req.body.authorId;

        const cond = {};
        if (id) {
            cond.id = id;
        }
        if (title){
            cond.title = title;
        }
        if (authorId) {
            cond.authorId = authorId;
        }
        Questionnaire.find(cond, (err, data) => {
            if (err) {
                throw err;
            }
            res.json(data);
        })
    };

};