import React from 'react'

function NameList() {
    
    // 2nd type
    const names= ["manny", "loren", "kandy"]
    const nameList = names.map(name=><h1>{name}</h1>)
    
  return (
    <div>
        {
            nameList
        }
    </div>


    /* // 1st type
    const names= ["manny", "loren", "kandy"]

  return (
    <div>
        {
            names.map(name=><h1>{name}</h1>)
        }
    </div>
 */


    /*{ normal
    <div>
        <h1>{names[0]}</h1>
        <h1>{names[1]}</h1>
        <h1>{names[2]}</h1>
    </div> }*/
    )}

export default NameList