const scheduleSchema = new Schema({

    scheduleid: {

        type: String,
        required: true
    },

    daySchedule: {
        type: Date,
        required: true,
        default: new Date()
    },

    DayShift: {
        type: Number,
        required: true
    },

    JobDepartment: [String],
});

const Schedule = model("Schedule", scheduleSchema);
