const express = require('express');
const distRoute = express.Router();

const AuthenticationAdmin  = require('../Middleware/Auth');


const {
    getDistributors,
    addDistributor
} = require('../Controller/DistributorAdmin');


distRoute.get('/distributors',AuthenticationAdmin, getDistributors);
distRoute.post('/new-distributor',AuthenticationAdmin, addDistributor);


module.exports = distRoute;