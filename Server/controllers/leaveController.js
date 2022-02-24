const Leaves = require('../models/leave');

const getAllLeaves = (req, res, next) => {
    let rows = [];
    let id, alsID, client, candidateName, openingBalance, closingBalance, lop, status, additionalSL, additionalEL, leaveTaken;
    Leaves.find({}).select("-_id alsID client candidateName openingBalance leaveTaken additionalSL additionalEL closingBalance lop status")
        .then((leave) => {
            for (let i = 0; i < leave.length; i++) {
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
                    status: status
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


module.exports = {
    getAllLeaves,
    createLeaves,
    deleteAllLeaves
};