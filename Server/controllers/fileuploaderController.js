const SingleFile = require('../models/singlefile');
const csv = require('csvtojson');

const getAllExcelData = (req, res, next) => {
    SingleFile.find({})
        .then((alljson) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(alljson);
        }, (err) => next(err))
        .catch((err) => next(err));
}


const singleFileUpload = async (req, res, next) => {
    try {
        const csvFilePath = req.file.path;
        const fileName = req.file.originalname;
        console.log(fileName);

        await SingleFile.create({ fileName: fileName, excelJson: await csv().fromFile(csvFilePath) });
        res.setHeader('Content-type', 'application/json');
        res.status(201).send('File Uploaded Successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLeaveTrackerNewTracker = (req, res, next) => {
    SingleFile.findOne({ fileName: "leave-tracker-2021-2022.xlsx" })
        .select("-_id")
        .then((leave) => {
            let leaveJsonArray = [];
            let newTracker = leave.excelJson['New Tracker'];
            for (let i = 2; i <= 4; i++) {
                leaveJsonArray.push(newTracker[i]);
            }
            //console.log(leaveJsonArray);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leaveJsonArray);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const getMisData = (req, res, next) => {
    SingleFile.findOne({ fileName: "leave.csv" })
        .select("-_id")
        .then((mis) => {
            // let leaveJsonArray = [];
            // let newTracker = leave.excelJson['New Tracker'];
            //  for(let i=2;i<=4;i++){
            //     leaveJsonArray.push(newTracker[i]);
            //  }
            //console.log(leaveJsonArray);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(mis.excelJson);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const updateOneMisData = (req, res, next) => {
    SingleFile.updateOne(
        { fileName: "leave.csv" },
        {
            $push: {
                excelJson: req.body
            }
        }
    )
        .select("-_id")
        .then((updatemis) => {
            // let leaveJsonArray = [];
            // let newTracker = leave.excelJson['New Tracker'];
            //  for(let i=2;i<=4;i++){
            //     leaveJsonArray.push(newTracker[i]);
            //  }
            //console.log(leaveJsonArray);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(updatemis);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const removeOneMisData = (req, res, next) => {

    SingleFile.updateOne(
        { '_id': '622086717e4a6a1c3c867688' },
        { $pull: { "excelJson": req.body } },

    ).then(() => {
        res.send("Successfully deleted")
    })

}

const updateExcelData = (req, res, next) => {
    SingleFile.findByIdAndUpdate(
        req.params.userId, {
            $set: req.body
          }, { new: true })
        .then((excel) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(excel);
        }, (err) => next(err))
        .catch((err) => next(err));
}

module.exports = {
    singleFileUpload,
    getAllExcelData,
    getLeaveTrackerNewTracker,
    getMisData,
    updateOneMisData,
    removeOneMisData,
    updateExcelData
}