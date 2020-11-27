const mongoose = require("mongoose")
const Schema = mongoose.Schema

const budgetSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        minlength: 7, 
        maxlength: 7,
    }

}, {collection: 'budgetCollection'})


module.exports = mongoose.model('budgetCollection', budgetSchema)