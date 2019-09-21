const express = require('express');
const router = express.Router();
const Response = require('../Response');

router.get('/', async (req, res, next)=> {
    let response = new Response(),
        useragent,
        status;


    try{

        status = 200;

        response.success = true;
        response.resultSet = [];
        response.message = '';

    }catch(e){
        status = 400;
        response.success = false;
        response.message = e.message;
    }finally {
        res.status(status);
        res.json(response);

        response = null;
        useragent = null;
        status = null;
    }
});

module.exports = router;