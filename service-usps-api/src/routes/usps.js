const express = require('express');
const router = express.Router();
const UspsService = require('../service/UspsService');
const Response = require('../Response');

router.post('/validate', async (req, res, next) => {
    let query,
        response,
        body,
        service;
    try {
        body = req.body;
        service = new UspsService();
        response = await service.validateAddress(body);
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