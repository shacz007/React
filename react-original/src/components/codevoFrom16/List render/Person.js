import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>i am {person.name} aged {person.age} having skill {person.skill}</h2>
        </div>
  )
}

export default Person