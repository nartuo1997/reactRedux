import React from 'react'
import './Person.css'
const Person = (props) => {
    return (
        <div className="person">
            {/* <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Type your name" />
            <label htmlFor="age">Age:</label>
            <input type="number" placeholder="age" /> */}
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Person
