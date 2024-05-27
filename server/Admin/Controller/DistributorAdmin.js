const Distributor = require('../Schema/Distributor');

//add distributor
const addDistributor = async (req, res) => {
    try {
        const { owner_name, organization_name, email, contact, location, password } = req.body;
        const distributor = await Distributor.create({ owner_name, organization_name, email, contact, location, password });
        if(!distributor) {
            return res.status(400).json({ success: false, message: 'Distributor not added' });
        }
        res.status(200).json({ success: true, message: 'Distributor added successfully' });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


//get all distributors
const getDistributors = async (req, res) => {
    try {
        const distributors = await Distributor.find();
        if(!distributors) {
            return res.status(400).json({ success: false, message: 'No distributor found' });
        }
        res.status(200).json({ success: true, distributors });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


module.exports = {
    addDistributor,
    getDistributors
}