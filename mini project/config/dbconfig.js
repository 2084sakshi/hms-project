const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');
});
// If the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});
// When the connection is disconnected
connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});
module.exports = mongoose;