const mongoose = require('mongoose')

const distributorSchema = new mongoose.Schema({
    owner_name: {
        type: String,
        required: true
    },
    organization_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})


const Distributor = mongoose.model('Distributor', distributorSchema)

module.exports = Distributor

