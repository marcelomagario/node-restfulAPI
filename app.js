const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

module.exports = app
