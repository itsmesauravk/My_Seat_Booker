
const express = require('express');
const AdminRouter = express.Router();


const {
    register,
    login,
    logout
} = require('../Controller/LoginRegister');

const AuthenticationAdmin  = require('../Middleware/Auth');


AdminRouter.post('/register', register);
AdminRouter.post('/login', login);
AdminRouter.post('/logout', AuthenticationAdmin, logout);




module.exports = AdminRouter;