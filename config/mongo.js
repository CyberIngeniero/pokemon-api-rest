const mongoose = require('mongoose');

const dbConnect = () => {
    DB_URI = process.env.DB_URI_TEST;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err, res) => {
        if (err) {
            console.log('ERROR: connecting to Database. ' + err);
        } else {
            console.log('Connected to Database');
        }
}
)};

module.exports = dbConnect;