'use strict';
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const passport = require('passport');
var XLSX = require('xlsx');
// var workbook = XLSX.readFile('Sample-Spreadsheet-10-rows.xls');
// var sheet_name_list = workbook.SheetNames;
// console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))

const fileRoutes = require('./routes/file-upload-routes');
const userRoutes = require('./routes/users-routes');
const leavesRoutes = require('./routes/leave-routes');

const port = process.env.PORT || 8080;
require('./db/database')();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//app.use(passport.initialize());

app.use('/exceldata', fileRoutes);
app.use('/users', userRoutes);
app.use('/leaves', leavesRoutes);

app.listen(port, () => console.log(`server is listening on url http://localhost:${port}`));