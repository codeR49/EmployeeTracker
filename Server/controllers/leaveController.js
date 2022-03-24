const Leaves = require('../models/leave');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let now = new Date();
let day = days[ now.getDay() ];
let month = months[ now.getMonth() ];   
let date = now.getDate();
const currentDay = `${day} ${month} ${date}`

const getAllLeaves = (req, res, next) => {
    let rows = [];
    let review, mongoId, id, alsID, client, candidateName, openingBalance, closingBalance, lop, status, additionalSL, additionalEL, leaveTaken;
    Leaves.find({}).select("_id alsID client candidateName openingBalance leaveTaken additionalSL additionalEL closingBalance lop status review")
        .then((leave) => {
            for (let i = 0; i < leave.length; i++) {
                mongoId = leave[i]._id
                id = i + 1;
                alsID = leave[i].alsID;
                client = leave[i].client;
                candidateName = leave[i].candidateName;
                openingBalance = leave[i].openingBalance;
                closingBalance = leave[i].closingBalance;
                lop = Number(leave[i].lop);
                status = leave[i].status;
                leaveTaken = leave[i].leaveTaken;
                additionalSL = leave[i].additionalSL;
                additionalEL = leave[i].additionalEL;
                review = leave[i].review;

                rows.push({
                    id: id,
                    alsID: alsID,
                    client: client,
                    candidateName: candidateName,
                    openingBalance: openingBalance,
                    leaveTaken: leaveTaken,
                    additionalSL: additionalSL,
                    additionalEL: additionalEL,
                    closingBalance: closingBalance,
                    lop: lop,
                    status: status,
                    _id: mongoId,
                    review: review
                })
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(rows);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const createLeaves = (req, res, next) => {
    let { currentMonthYear, status, alsID, client, clientLob, candidateName, dateOfJoining, dateOfC, lastWorkingDate } = req.body;
    let { probationPeriod, elAmount, elEligibility, basic, grossSalary, openingBalance, leaveTaken, additionalSL, additionalEL, lop } = req.body

    let closingBalance = (parseFloat(openingBalance) + parseFloat(additionalSL) + parseFloat(additionalEL) - parseFloat(leaveTaken)).toFixed(2)
        .toString();
    Leaves.create({
        currentMonthYear,
        status,
        alsID,
        client,
        clientLob,
        candidateName,
        dateOfJoining,
        dateOfC,
        lastWorkingDate,
        probationPeriod,
        elAmount,
        elEligibility,
        basic,
        grossSalary,
        openingBalance,
        leaveTaken,
        additionalSL,
        additionalEL,
        closingBalance,
        lop
    })
        .then((leave) => {
            console.log('Leave created', leave);
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.json(leave)
        }, (err) => next(err))
        .catch((err) => next(err))
}

const deleteAllLeaves = (req, res, next) => {
    Leaves.remove({})
        .then((remove) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(remove);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const editLeaveById = (req, res, next) => {
    Leaves.findByIdAndUpdate(req.params.leaveID, {
        $set: req.body
    }, { new: true })
        .then((leave) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leave);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const deleteLeaveById = (req, res, next) => {
    Leaves.findOneAndDelete({ "alsID": req.params.alsID })
        .then(() => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send("Successfully deleted");
        }, (err) => next(err))
        .catch((err) => next(err));
}

const updateReviewById = (req, res, next) => {
    Leaves.findByIdAndUpdate(req.params.reviewID, { $set: { review: req.body.review } }, { new: true })
        .then((review) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send("Successfully Updated");
        }, (err) => next(err))
        .catch((err) => next(err));
}

const countEmployees = async (req, res) => {
    const countTotalEmployees = await Leaves.countDocuments({});
    const countCurrentMonthEmployees = await Leaves.find({
        "$expr": {
            "$and": [
                { "$eq": [{ "$year": "$dateOfJoining" }, 2022] },
                { "$eq": [{ "$month": "$dateOfJoining" }, 2] }
            ]
        }
    }).countDocuments({});
    const countTotalInactiveEmployees = await Leaves.find({ status: "Inactive" }).countDocuments({});


    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        "currentDay": currentDay,
        "totalEmployees": countTotalEmployees,
        "currentMonth":  countCurrentMonthEmployees,
        "countTotalInactive": countTotalInactiveEmployees,
    });


}

const inactiveEmployee = async (req, res) => {
    await Leaves.find({ status: "Inactive" }, {_id: 0, candidateName: 1, alsID: 1, probationPeriod: 1})
    .then((inactive) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            inactive
        });
    }, (err) => next(err))
    .catch((err) => next(err));
}
module.exports = {
    getAllLeaves,
    createLeaves,
    deleteAllLeaves,
    deleteLeaveById,
    editLeaveById,
    updateReviewById,
    countEmployees,
    inactiveEmployee
};