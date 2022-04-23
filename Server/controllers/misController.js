let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;

const getAllMis = async (req, res, next) => {

    await MongoClient.connect(process.env.MONGO_URL, function (err, db) {
        if (err) { return console.dir(err); }
        let database = db.db('employeeDB');
        let collection = database.collection('mis');
        collection.find({}).toArray(function (err, mis) {
            // here ...
            mis.shift();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(mis);
        });
    });
    
}

module.exports = {
    getAllMis
}