const express = require('express');
const router = express.Router();
const LibpostalService = require('../service/LibpostalService');
const Response = require('../Response');

router.get('/', async (req, res, next) => {
    let query,
        response,
        service;
    try {
        query = req.query.query;
        service = new LibpostalService();
        response = await service.parseAddress(query);
        res.json(response);
    } catch (e) {
        next(e);
    } finally {
        query = null;
        response = null;
        service = null;
    }
});
module.exports = router;