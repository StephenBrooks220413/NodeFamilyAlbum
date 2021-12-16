const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
if(mongoose){
    console.log("DB connected")
} else {
    console.log("No DB connection")
}