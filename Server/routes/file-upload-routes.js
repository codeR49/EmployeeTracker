const express = require('express');
const { upload } = require('../helpers/filehelper');
const fileController = require('../controllers/fileuploaderController');
const fileRouter = express.Router();

fileRouter.get('/', fileController.getAllExcelData);
fileRouter.post('/', upload.single('file'), fileController.singleFileUpload);

fileRouter.get('/leave', fileController.getLeaveTrackerNewTracker);
fileRouter.get('/mis', fileController.getMisData);
fileRouter.put('/updateonemis', fileController.updateOneMisData);
fileRouter.put('/removeonemis', fileController.removeOneMisData);
fileRouter.put('/updatemis/:userId', fileController.updateExcelData);


module.exports = fileRouter;