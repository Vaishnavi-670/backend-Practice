const { model, Schema , } = require('../connection');

const mySchema = new Schema ({
    name : String,
    email : {type: String, unique: true},
    city: {type: String, default:'Unknown'},
    password : {type: String, required: true},
    createdAt : {type: Date, default: Date.now}
});

module.exports = model('users',mySchema); //user is collection name 