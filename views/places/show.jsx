const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h2 className="text-center">
                    {data.place.name}
                </h2>
                <img className="smaller-image" src={data.place.pic} alt={data.place.name}/>
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
                <p className="text-center">
                    Located in {data.place.city}, {data.place.state}
                </p>
                <h2>
                    Description
                </h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show