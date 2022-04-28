let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
const Timesheet = require('../models/timesheet');
const csv = require('csvtojson');

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

const timesheetdata = async (req, res, next) => {
    let timesheet = [], obj = {};

    await MongoClient.connect(process.env.MONGO_URL, function (err, db) {
        if (err) { return console.dir(err); }
        let database = db.db('employeeDB');
        let collection = database.collection('mis');
        collection.find({}).toArray(function (err, mis) {
            // here ...
            mis.shift();
            for(let i=0;i<mis.length;i++){
                let RESOURCE_CLIENT_ID = mis[i]["RESOURCE CLIENT ID"];
                let CLIENT = mis[i].CLIENT;
                
                timesheet.push({
                    "label": `${CLIENT} ${RESOURCE_CLIENT_ID}`,
                    "value": RESOURCE_CLIENT_ID
                });
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            // timesheet.push(obj)
            res.json(timesheet);
        });
    });
    
}

const timesheetFileUpload = async (req, res, next) => {
    try {
        const csvFilePath = req.file.path;
        // const fileName = req.file;
        console.log(csvFilePath);

        await Timesheet.create({ clientId: req.body.clientId, fileName: csvFilePath, uploadDate: req.body.uploadDate, month: req.body.month, excelTojson: await csv().fromFile(csvFilePath) });
        res.setHeader('Content-type', 'application/json');
        res.status(201).send('File Uploaded Successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const download = async (req, res) => {
    await Timesheet.findOne({clientId: req.params.clientId, month: req.params.month})
                                            
    .select("fileName")
    .then((download) => {
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if(download == null){
            res.json("Timesheet Not Found");
        }
        else{
            res.json(download);
        }
        
    }, (err) => next(err))
    .catch((err) => next(err));
}

module.exports = {
    getAllMis,
    timesheetdata,
    timesheetFileUpload,
    download
}