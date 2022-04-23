let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;

const getAllAttrition = async (req, res, next) => {

    await MongoClient.connect(process.env.MONGO_URL, function (err, db) {
        if (err) { return console.dir(err); }
        let database = db.db('employeeDB');
        let collection = database.collection('attrition');
        collection.find({}).toArray(function (err, attrition) {
            // here ...
            attrition.shift();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(attrition);
        });
    });
    
}

module.exports = {
    getAllAttrition
}