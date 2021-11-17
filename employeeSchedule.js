const employeeSchedule = new Schema({
    employee: {
        type: new Schema({
            userid: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            },
            password: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            },

            fullName: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 20
            },

            isEmployee: {
                type: Boolean,
                default: false,
            }
        }),
        required: true
    },
    schedule: {
        type: new Schema({
            scheduleid: {
                type: String,
                required: true,
                minlength: 6,
                maxlength: 14
            },
            daySchedule: {
                type: Date,
                required: true,
                default: new Date()
            },
            DayShift: {
                type: Number,
                required: true,
                min: 3,
                max: 4
            },
            JobDepartment: [String],
        }),
        required: true
    },
});


//const employeeSchedule = mongoose.model("employeeSchedule", employeeSchema);