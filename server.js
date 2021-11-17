const bodyparser = require("body-parser")
const dotenv = require("dotenv")
const express = require("express")
dotenv.config()
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
var cookieParser = require("cookie-parser")
const port = process.env.PORT || 3000
const bcrypt = require("bcryptjs")
const salt = 10

const app = express()

/**
================================================================================
================================================================================
==========================  Add Schema   ====================================
============================  there is no schema here???????=========================================
================================================================================
**/

app.set("view engine", "ejs")
app.set("views", "./views")
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"))
app.use(express.static("/views/img/Logo.png"))
//app.listen(port, () => {
//console.log(`Running on port ${port}`);
//})

const JWT_SECRET = process.env.jwt
const MONGODB_URL = process.env.mongodb

mongoose.Promise = global.Promise

//var url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// mongoose.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });

/**
================================================================================
================================================================================
================== Added Database URL ===============================
================================================================================
================================================================================
**/
const dbURL =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
mongoose
  .connect(dbURL)
  .then(() => console.log("MongoDB Connected ..."))
  .catch((err) => console.log(err))

/**
User Register
**/
/**
================================================================================
================================================================================
========================== User Reigistration ==================================
================================================================================
================================================================================
**/

// THIS IS AN INCORRECT ROUTE
app.post("/views/register", async (req, res) => {
  // geting our data from frontend
  const { userid, password, fullName, isEmployee: plainTextPassword } = req.body
  // encrypting our password to store in database
  const passwrd = await bcrypt.hash(plainTextPassword, salt)
  try {
    // storing our user data into database
    const response = await User.create({
      userid,
      password,
      fullName,
      Employee,
    })
    return res.redirect("/")
  } catch (error) {
    console.log(JSON.stringify(error))
    if (error.code === 11000) {
      return res.send({ status: "error", error: "username already exists" })
    }
    throw error
  }
})

//app.listen(port, () => {
//console.log(`Running on port ${port}`);
//})
// user login function
const verifyUserLogin = async (userid, passwrd) => {
  try {
    const user = await User.findOne({ userid }).lean()

    if (!user) {
      return { status: "error", error: "user not found" }
    }
    if (await bcrypt.compare(passwrd, user.password)) {
      // creating a JWT token
      token = jwt.sign(
        { id: user.userid, username: user.fullName, type: "user" },
        JWT_SECRET,
        { expiresIn: "2h" }
      )
      return { status: "ok", data: token }
    }
    return { status: "error", error: "invalid password" }
  } catch (error) {
    console.log(error)
    return { status: "error", error: "timed out" }
  }
}

// THIS IS AN INCORRECT ROUTE
app.post("/views/login", async (req, res) => {
  const { userid, password, fullName, isEmployee } = req.body
  console.log(userid, password)
  // we made a function to verify our user login
  const response = await verifyUserLogin(userid, password, fullName, isEmployee)
  if (response.status === "ok") {
    // storing our JWT web token as a cookie in our browser
    res.cookie("token", token, { maxTime: 2 * 60 * 60 * 1000, httpOnly: true }) // maxTime: 2 hours
    res.redirect("/")
  } else {
    res.json(response)
  }
})

/** server.js */

// YOUR MAIN LOGIN PAGE NOW RENDERS BECAUSE I CHANGED THIS CODE HERE
app.get("/", (req, res) => {
  res.render("login")
})

// I CHANGED THIS TO RENDER THE REGISTER PAGE AND ADD THE LINK TO THIS PAGE FROM YOUR LOGIN PAGE
app.get("/register", (req, res) => {
  res.render("register")
})

// these 3 links below will not work until you're rendering data from the server
app.get("/addSchedule", (req, res) => {
  res.render("addSchedule")
})

app.get("/views/employees", (req, res) => {
  res.render("employees")
})

app.get("/views/employees", (req, res) => {
  res.render("employees")
})

/* YOU HAVE NOT IMPORTED YOUR ROUTES INTO THIS SERVER FILE AT ALL SO THEY ARE NOT BEING UTILISED AT ALL.

THE ROUTES YOU HAVE ABOVE ARE ONLY POINTING TO YOUR VIEWS PAGE AND THAT IS NOT AN API ROUTE, THOSE EJS FILES ONLY RENDER PAGES AND SUBMIT FORMS TO YOUR SERVER WHERE YOUR ROUTES SHOULD BE

REFER TO MY ROUTES FOLDER AND SERVER FOLDER TO SEE WHERE I IMPORTED MY MODELS INTO MY ROUTES FILES AND THEN IMPORTED MY ROUT


*/

// app.get("/User", (req, res) => {
//   User.find({}, function (err, user) {
//     res.render("employee", {
//       employee: allEmployees,
//     })
//   })
// })

// app.get("/create", (req, res) => {
//   User.find({}, function (err, user) {
//     res.render("createSchedule", {
//       management: allMgmt,
//     })
//   })
// })

// app.use("./routes/employees")
// app.use("./routes/schedules")
// app.use("./routes/employeesSchedule")
// app.use(express.static(__dirname + "/views"))
// app.use(express.static(__dirname + "./index.js"))

/** run server **/
app.listen(8080, () => console.log("Server running in PORT: 8080"))
