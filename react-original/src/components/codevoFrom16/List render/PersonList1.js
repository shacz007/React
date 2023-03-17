import React from 'react'
import Person1 from './Person'

function PersonList1() {
    //  for array inside the object, access
    const persons =
    [
        {
            id:1,
            name: "polo",
            age: 35,
            skill: "c"
        },
        {
            id:1,
            name: "gusssi",
            age: 14,
            skill: "c++"
        },
        {
            id:1,
            name: "minga",
            age: 65,
            skill: "js"
        }
        
    ]
    const personList = persons.map(person => <Person1 person={person}/>)
    
    return (
        <div>{personList}</div>
        // BUT PROPER WAY TO DO IT IS TO HAVE DATA IN SEPARATE js FILE 
        //taken back up and done    
    
    )}

export default PersonList1