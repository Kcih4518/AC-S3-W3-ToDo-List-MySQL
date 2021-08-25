// Require node modules
const express = require('express')
const exphdbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')
const session = require('express-session')

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
    secret: 'ThisIsMySecret',
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

// Setting Express router and import request into router
app.use(routes)

// Start and listen on the express server
app.listen(PORT, () => {
  console.log(`Express is listen on http://localhost:${PORT}`)
})
