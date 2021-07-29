import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Peoples() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then((response) => {
            setPeople(response.data.results)
        })
    })

        if(people){
            return (
                people.map((people) => (
            <section>
                <div className="bg-color">

                    <ul>
                        <img src = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt = " 404 error winner said so"/>
                    <li key = {people}>
                        <h1>{people.name}</h1>
                        <p>{people.gender}</p>
                        <p>{people.height}</p>

                    </li>

                    </ul>

                </div>
            </section>
                ))
            )
        }

    return (
        <div>
            <p>{people}</p>
            
        </div>
    )
}

export default Peoples
