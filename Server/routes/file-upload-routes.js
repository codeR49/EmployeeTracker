const express = require('express');
const { upload } = require('../helpers/filehelper');
const fileController = require('../controllers/fileuploaderController');
const fileRouter = express.Router();

fileRouter.get('/', fileController.getAllExcelData);
fileRouter.post('/', upload.single('file'), fileController.singleFileUpload);

fileRouter.get('/leave', fileController.getLeaveTrackerNewTracker);

module.exports = fileRouter;