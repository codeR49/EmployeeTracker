const express = require('express');
const misRouter = express.Router()
const misController = require("../controllers/misController");
const { upload } = require('../helpers/filehelper');
// const authenticate = require('../middlewares/authenticate');
misRouter.use(express.json());

misRouter.route('/')
    .get(misController.getAllMis) //route to get all mis

misRouter.get('/timesheet', misController.timesheetdata);

misRouter.get('/download/:clientId/:month', misController.download);

misRouter.post('/upload', upload.single('file'), misController.timesheetFileUpload);

module.exports = misRouter;