// Require node modules
const express = require('express')
const exphdbs = require('express-handlebars')
const session = require('express-session')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const routes = require('./routes')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const usePassport = require('./config/passport')

// Define server info
const PORT = process.env.PORT

// Setting express
const app = express()

// Setting express-handlebars
app.engine(
  'hbs',
  exphdbs({
    defaultLayout: 'main',
    extname: '.hbs'
  })
)
app.set('view engine', 'hbs')

// Setting express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
)

// Setting body-parser
app.use(express.urlencoded({ extended: true }))

// Setting middleware : method-override
app.use(methodOverride('_method'))

// 呼叫 Passport 函式並傳入 app，這條要寫在路由之前
usePassport(app)

app.use(flash())

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

// Setting Express router and import request into router
app.use(routes)

// Start and listen on the express server
app.listen(PORT, () => {
  console.log(`Express is listen on http://localhost:${PORT}`)
})
