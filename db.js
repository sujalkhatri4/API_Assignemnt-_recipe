const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const InitiateMongoServer = async () => {
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Connected to DB");
    }
    catch(e){
        console.log(e);
        //throw(e);
    }
};

module.exports = InitiateMongoServer;