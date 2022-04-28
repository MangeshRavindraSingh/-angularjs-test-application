const { Schema } = require('mongoose');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/Multiply_DB"


const resultSchema = Schema({
    "input1": { type: Number },
    "input2": { type: Number },
    "result": { type: Number },

}, { collection: "result", timestamps: true })


let connection = {}

//Returns model object of "result" collection
connection.resultCollection = () => {
    //establish connection and return model as promise
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(database => {
        return database.model('result', resultSchema)
    }).catch(error => {
        let err = new Error("Could not connect to the database");
        err.status = 500;
        throw err;
    });
}

module.exports = connection;