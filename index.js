// Modules and Globals
const express = require('express')
const app = express()
require('dotenv').config()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})


// Server listening
app.listen(process.env.PORT, () => {
    console.log(`Server listening at ${process.env.PORT}`)
})