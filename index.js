const express = require('express')
const app = express()

app.get('/', (req, req) => {
    res.send('Hello world!')
})

app.listen(3000)