const router = require('express').Router()
const places = require("../models/places.js")

router.get('/', (req, res) => {
    res.render('./places/index', { places })
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

router.get('/new', (req, res) => {
    res.render('new')
})

router.get('/:id', (req, res) => {
    let id = req.params.id
    if (isNaN(id)) {
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    } else {
        res.render(`./places/show`, {place: places[id]})
    }
})

router.put('/:id', (req, res) => {
    res.send(`PUT /places/${req.params.id}`)
})

router.get('/:id/edit', (req, res) => {
    res.send(`PUT /places/${req.params.id}/edit`)
})

router.delete('/:id', (req, res) => {
    res.send(`DELETE /places/${req.params.id}`)
})

router.post('/:id/rant', (req, res) => {
    res.send(`POST /places/${req.params.id}/rant`)
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send(`DELETE /places/${req.params.id}/rant/${req.params.rantId}`)
})

router.get('*', (req, res) => {
    res.status(404).send('<h1>The page you are looking for does not exist.</h1>')
})

module.exports = router