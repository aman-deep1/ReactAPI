var mongoose = require('mongoose');

function getConnection(callback)
{
    mongoose.connect('mongodb+srv://admin:admin123@cluster0.n74sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    var conn = mongoose.connection;
    callback(conn)
}

module.exports = getConnection