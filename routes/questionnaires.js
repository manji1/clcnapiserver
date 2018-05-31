const express = require('express');
const router = express.Router();

router.get('/', (req, res ,next) => {
    const loader = require('api/questionnaire/questionnaire-loader');
    loader.load(req, res);
});

router.post('/', (req, res, next) => {

});

module.exports = router;
