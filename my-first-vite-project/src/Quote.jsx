import React, { useState } from 'react'



const Quote = () => {
  
  const [counter,setCounter] = useState(0)

  return (
    <div className="quote">
      Lagecy doesnot comes by birth .It comes by the Hard work
     <p> counter:{counter}</p>
     <button onClick={()=>{if(counter!=20)setCounter(counter+1)}}>Add</button>
     <button onClick={()=>{if(counter!=0)setCounter(counter-1)}}>Sub</button>
    </div>
  )
}

export default Quote
