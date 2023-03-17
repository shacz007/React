import React from 'react'

function PersonList() {
    //  for array inside the object, access
    const person =
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
    const personList = person.map(person => <h2>i am {person.name} aged {person.age} having {person.skill} skill</h2>)
    return (
        <div>
        <h2>{personList}</h2>
        </div>
        // BUT PROPER WAY TO DO IT IS TO HAVE DATA IN SEPARATE js FILE 
        //taken back up and done 
    
    )}

export default PersonList