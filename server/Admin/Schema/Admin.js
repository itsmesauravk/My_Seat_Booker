
const mongoose = require('mongoose');


const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    contact: {
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    }
    ,
    password: {
        type: String,
        require: true,
        minlength: 6,
        maxlength: 100,
        
    }
})

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;