const path = require('path') //core nodejs module
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const methodOverride = require("method-override");
const flash = require('express-flash')
const logger = require('morgan')
//connect database
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const vendorRoutes = require("./routes/vendor");


// Passport config
require("./config/passport")(passport);
// load config file
dotenv.config({ path: './config/.env' })

//connectDB() //calls the database

app.set('views', path.join(__dirname, 'views'));
//Using EJS for views
app.set("view engine", "ejs");


//Static Folder
app.use(express.static("public"));

//body parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//logging
app.use(logger('dev'))


//Use forms for put / delete
app.use(methodOverride("_method"));

// Sessions
app.use(session({
        secret: 'keyboard cat',
        resave: false, //we dont want save a session if nothing is modified 
        saveUninitialized: false, //dont create a session until something is stored 
        store: MongoStore.create({
            mongoUrl: process.env.DB_STRING
        })
    })
)

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, etc...
app.use(flash());

//routes
app.use("/", mainRoutes)
app.use("/vendor", vendorRoutes)

//connect to database then listen
connectDB().then(() => {
    app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})
})


// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log("listening for requests");
//     })
// })