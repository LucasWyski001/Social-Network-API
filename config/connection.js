const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:WysoczanskiDenLuc01@cluster0.1hdcug7.mongodb.net/socialNetworkDB');

module.exports = connection;