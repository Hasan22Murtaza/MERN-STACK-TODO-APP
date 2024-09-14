const mongoose = require('mongoose');

const db_url = process.env.Database_URL

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Connection error:"))
db.once('open', function () {
    console.log('Connected MongoDB')
})