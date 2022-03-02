const SingleFile = require('../models/singlefile');
const XLSX = require('xlsx');
const excelToJson = require('convert-excel-to-json');

const getAllExcelData = (req, res, next) => {
    SingleFile.find({})
        .then((alljson) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(alljson);
        }, (err) => next(err))
        .catch((err) => next(err));
}

// const singleFileUpload = (req, res, next) => {

//     let file = req.file.path;

//     console.log(file);
//     const result = excelToJson({
//         sourceFile: fs.readFileSync(file)
//     });
//     console.log(result);
//     SingleFile.create({
//         fileName: req.file.fileName,
//         excelJson: result
//     })
//         .then((excel) => {
//             res.statusCode = 200;
//             res.setHeader('Content-type', 'application/json');
//             res.json(excel)
//         }, (err) => next(err))
//         .catch((err) => next(err))
// }

const singleFileUpload = async (req, res, next) => {
    try {

        let name = `${req.file.originalname}`;
        //let fileName = req.file.filename;
        //console.log(typeof(fileName));
        //console.log(name + 'origin');
        //console.log(fileName);
         let result = await excelToJson({
            sourceFile: name
        });
        console.log(result);
        // let workbook = XLSX.readFile(fileName);
        // let sheet_name_list = workbook.SheetNames;
        // console.log(sheet_name_list);
        // let excelToJson = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        //console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));
        // const file = new SingleFile({
        //      fileName: fileName,
        //      excelJson: result
        //     });

        await SingleFile.create({fileName: name, excelJson: result});
        res.setHeader('Content-type', 'application/json');
        res.status(201).send('File Uploaded Successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLeaveTrackerNewTracker = (req, res, next) => {
    SingleFile.findOne({fileName: "leave-tracker-2021-2022.xlsx"})
        .select("-_id" )
        .then((leave) => {
            let leaveJsonArray = [];
            let newTracker = leave.excelJson['New Tracker'];
             for(let i=2;i<=4;i++){
                leaveJsonArray.push(newTracker[i]);
             }
            //console.log(leaveJsonArray);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leaveJsonArray);
        }, (err) => next(err))
        .catch((err) => next(err));
}

module.exports = {
    singleFileUpload,
    getAllExcelData,
    getLeaveTrackerNewTracker
}