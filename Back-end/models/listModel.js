const mongoose = require('mongoose');

const listSchema = mongoose.Schema({

    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
    }

});

const List = mongoose.model('Lists',listSchema);

module.exports = List;