const express = require('express');
const leaveRouter = express.Router()
const leaveController = require("../controllers/leaveController");
const authenticate = require('../middlewares/authenticate');
leaveRouter.use(express.json());

leaveRouter.route('/')
    .post(leaveController.createLeaves) //route to create a leave
    .delete(leaveController.deleteAllLeaves); //route to delete all leaves

leaveRouter.get('/getall', authenticate.verifyUser, authenticate.verifyAdmin, leaveController.getAllLeaves)
leaveRouter.put('/:leaveID', leaveController.editLeaveById)

leaveRouter.delete('/:alsID', leaveController.deleteLeaveById)

module.exports = leaveRouter;
