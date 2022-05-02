const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('./places/index', { places })
})

router.post('/', (req, res) => {
    res.send('POST /places')
})

router.get('/new', (req, res) => {
    res.send('GET /places/new')
})

router.get('/:id', (req, res) => {
    res.send(`GET /places/${req.params.id}`)
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