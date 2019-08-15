const mongo = require('mongoose');
const schema = mongo.Schema({
    fullname: String,
    email: String,
    message: String
});

module.exports = mongo.model('contact', schema);