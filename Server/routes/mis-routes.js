const express = require('express');
const misRouter = express.Router()
const misController = require("../controllers/misController");
// const authenticate = require('../middlewares/authenticate');
misRouter.use(express.json());

misRouter.route('/')
    .get(misController.getAllMis) //route to get all mis

module.exports = misRouter;