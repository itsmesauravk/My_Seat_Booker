
const express = require('express');
const AdminRouter = express.Router();


const {
    register,
    login
} = require('../Controller/LoginRegister');


AdminRouter.post('/register', register);
AdminRouter.post('/login', login);



module.exports = AdminRouter;