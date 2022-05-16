require('dotenv').config()
const Mongoose = require('mongoose')

Mongoose.connect(process.env.MONGO, () => {
    console.log('MongoDB Connected'
    )
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')