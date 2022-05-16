const db = require('../models')

async function seed() {
    let place = await db.place.findOne({name: 'H-Thai-ML'})

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        comment: 'Wow, simply amazing! Hight recommended!'
    })

    place.comments.push(comment.id)

    await place.save()

    process.exit()
}

seed()