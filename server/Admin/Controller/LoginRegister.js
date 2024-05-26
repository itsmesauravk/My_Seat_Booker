const Admin = require('../Schema/Admin');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    try {
        const { username, email, contact, password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const admin = await Admin.create({ 
            username, 
            email, 
            contact, 
            password: hashedPassword
        });
        if(admin) {
            res.status(201).json({success:true, message: 'Admin registered successfully' });
        }
    }catch(err) {
        res.status(400).json({ success:false, message: err.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if(admin) {
            const isMatch = bcrypt.compareSync(password, admin.password);
            if(isMatch) {
                const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.cookie('admin-token', token, { httpOnly: true });
                res.status(200).json({ success:true, message: 'Admin logged in successfully' });
            }else {
                res.status(400).json({ success:false, message: 'Invalid credentials' });
            }
        }
    }
    catch(err) {
        res.status(400).json({ success:false, message: err.message });
    }
}

module.exports = { 
    register, 
    login 
};