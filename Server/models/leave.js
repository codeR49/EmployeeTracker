var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var leaveSchema = new Schema({
    currentMonthYear: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        required: true
    },
    review: {
        type: String,
        default: 'In Review'
    },
    alsID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    client: {
        type: String,
        required: true,
        trim: true
    },
    clientLob: {
        type: String,
        required: true,
        trim: true
    },
    candidateName: {
        type: String,
        required: true,
        trim: true
    },
    dateOfJoining: {
        type: String,
        required: true
    },
    dateOfC: {
        type: String
    },
    lastWorkingDate: {
        type: String
    },
    probationPeriod: {
        type: String,
        required: true,
        trim: true
    },
    elAmount: {
        type: mongoose.Decimal128
    },
    elEligibility: {
        type: mongoose.Decimal128
    },
    basic: {
        type: mongoose.Decimal128,
        required: true
    },
    grossSalary: {
        type: mongoose.Decimal128,
        required: true
    },
    openingBalance: {
        type: String,
        required: true
    },
    leaveTaken: {
        type: String,
        required: true
    },
    additionalSL: {
        type: String,
        required: true
    },
    additionalEL: {
        type: String,
        required: true
    },
    closingBalance: {
        type: String,
        required: true
    },
    lop: {
        type: mongoose.Decimal128,
        required: true
    }

}, {
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Leave', leaveSchema);