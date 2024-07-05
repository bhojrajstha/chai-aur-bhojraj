
import { useState } from 'react'
import Button from './Button'
import "./button.css"
function App() {
  const [Color,setColor] = useState("olive")
  return (
    <>
     <div className="main" style={{backgroundColor: Color}}>
       <div className="bg-changer-box">
        <Button  clr="Red" clickevent={()=>setColor("red")}/>
        <Button  clr="Green" clickevent={()=>setColor("green")}/>
        <Button  clr="Yellow" clickevent={()=>setColor("yellow")}/>
        <Button clr="orange" clickevent={()=>setColor("orange")}/>
        <Button  clr="Olive" clickevent={()=>setColor("olive")}/>
        <Button  clr="blue" clickevent={()=>setColor("blue")}/>
        <Button  clr="white" clickevent={()=>setColor("white")} setblack="black"/>
        <Button  clr="black" clickevent={()=>setColor("black")}/>
       </div>
     </div>
    </>
  )
}

export default App
