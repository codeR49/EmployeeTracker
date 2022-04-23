let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;

const getAllActive = async (req, res, next) => {

    await MongoClient.connect(process.env.MONGO_URL, function (err, db) {
        if (err) { return console.dir(err); }
        let database = db.db('employeeDB');
        let collection = database.collection('active');
        collection.find({}).toArray(function (err, active) {
            // here ...
            active.shift();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(active);
        });
    });
    
}

module.exports = {
    getAllActive
}

