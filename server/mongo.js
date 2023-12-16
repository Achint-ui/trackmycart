const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
   
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    lat: {
        type: Number,
        required: true
    },

    lon: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    description_long: {
        type: String,
        required: true
    }
}
)

const Vendor = mongoose.model('vendors', schema)

module.exports = Vendor

