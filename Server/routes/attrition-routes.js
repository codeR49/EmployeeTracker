const express = require('express');
const attritionRouter = express.Router()
const attritionController = require("../controllers/attritionController");
// const authenticate = require('../middlewares/authenticate');
attritionRouter.use(express.json());

attritionRouter.route('/')
    .get(attritionController.getAllAttrition) //route to get all attrition

module.exports = attritionRouter;