const mongoose = require('mongoose');


const companySchema = mongoose.Schema({
    assessmentRecord: {
        type: Number,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    bern: {
        type: Number,
        required: true
    },
    adress:{
        type: String,
        required: true
    },
    dated:{
        type: Date,
        required: true,
        default: Date.now
    },
    indusGroup:{
        type: mongoose.Types.ObjectId,
        ref: 'IndusGroup',
        required: true
    },
    preparedBy: {
        type: String,
        required: true
    }
})

exports.Company = mongoose.model('Company',companySchema);

