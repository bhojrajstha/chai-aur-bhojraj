import React from 'react'
import "./button.css"

const Button = (props) => {
  
  return (
    <button style={{backgroundColor: props.clr,color: props.setblack}} onClick={props.clickevent} >
      {props.clr}
    </button>
  )
}

export default Button
