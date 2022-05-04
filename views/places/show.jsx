const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <img src={ data.place.pic }></img>
            </main>
        </Def>
    )
}

module.exports = show