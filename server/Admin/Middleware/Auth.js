const Admin = require('../Schema/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const AuthenticationAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) {
            return res.status(401).json({ success:false, message: 'Unauthorized access' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findById(decoded.id);
        if(!admin) {
            return res.status(401).json({ success:false, message: 'Unauthorized access' });
        }
        req.admin = admin;
        next();
    }catch(err) {
        res.status(400).json({ success:false, message: err.message });
    }
}


module.exports = AuthenticationAdmin;