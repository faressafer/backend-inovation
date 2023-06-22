const mongoose = require('mongoose');

const indusGroupSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    indusName: {
        type: String,
        required: true
    }
})



exports.IndusGroup = mongoose.model('IndusGroup', indusGroupSchema);

