const userSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },

    isEmployee: {
        type: Boolean,
        default: false
    }

});



const user = model("User", userSchema);