const express = require("express");
const resultRouting = express.Router();
const resultService = require('../service/result');

resultRouting.get('/getResult/', async (req, res, next) => {
    try {
        const results = await resultService.getStoredResult()
        res.send(results);
    }
    catch (err) {
        next(err);
    }
});


resultRouting.post('/saveResult/', async (req, res, next) => {
    try {
        const result = req.body
        const savedResult = await resultService.saveResult(result)
        res.send(savedResult);
    }
    catch (err) {
        next(err);
    };
});

module.exports = resultRouting
