var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timeSheetSchema = new Schema({
    clientId: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    excelTojson: {
        type: Schema.Types.Mixed,
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


module.exports = mongoose.model('Timesheet', timeSheetSchema);