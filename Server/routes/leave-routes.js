const express = require('express');
const leaveRouter = express.Router()
const leaveController = require("../controllers/leaveController");
leaveRouter.use(express.json());

leaveRouter.route('/')
    .get(leaveController.getAllLeaves) //route for all leaves
    .post(leaveController.createLeaves) //route to create a leave
    .delete(leaveController.deleteAllLeaves); //route to delete all leaves

module.exports = leaveRouter;
