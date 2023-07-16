const { Company } = require('../models/company');
const express = require('express');
const router = express.Router();

// create new company with out dimension
router.post('/create', async (req, res) => {
    try {
        const existingCompany = await Company.findOne({ companyName: req.body.companyName });
        if (existingCompany) {
            return res.send('Company already exists');
        }
        let company = new Company({
            assessmentRecord: req.body.assessmentRecord,
            companyName: req.body.companyName,
            bern: req.body.bern,
            address: req.body.address,
            dated: req.body.dated,
            indusGroup: req.body.indusGroup,
            income: req.body.income,
            size: req.body.size,
            preparedBy: req.body.preparedBy
        });
        await company.save();
        res.send('Company created successfully')
    } catch (err) {
        console.log(err);
    }
});


//get all companies without deminsions
router.get('/list', async (req, res) => {
    const company = await Company.find();
    if (!company) {
        res.status(404).send('Company not found');
    }
    res.send(company);
})




module.exports = router