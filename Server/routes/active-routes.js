const express = require('express');
const activeRouter = express.Router()
const activeController = require("../controllers/activeController");
// const authenticate = require('../middlewares/authenticate');
activeRouter.use(express.json());

activeRouter.route('/')
    .get(activeController.getAllActive) //route to get all active

module.exports = activeRouter;