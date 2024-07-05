
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
 
const [length,setLength] = useState(8)
const [numberAllowed,setNumberAllowed] = useState(false)
const [charAllowed,setCharAllowed] = useState(false)
const [password,setPassword] = useState('')


  const passwordGenerator = useCallback(() => {
    let pass="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str += "!@#$*_&./"
   for(let i=1;i<=length;i++){
    const randomNum= Math.floor(Math.random()*str.length+1);
   pass += str.charAt(randomNum);
   }
  setPassword(pass);
  }, [length,numberAllowed,charAllowed,setPassword])
  
const copyPasswordToClipBoard = useCallback(() => {
  passwordRef.current?.select()
window.navigator.clipboard.writeText(password)
},[password])


  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])


  const passwordRef = useRef(null)

  return (
    <>
    <div className="w-full max-w-md  mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500
    bg-gray-800" >
      <h1 className=" text-center text-white my-3">Password Creator</h1>
      <div className='flex shadow rounded-lg overflow-hidden my-3 '>
      <input type="text" value={password}
      className='outline-none w-full py-1 px-3' placeholder="Password" readOnly ref={passwordRef}></input>
      <button className='outline-none  bg-blue-700  px-3 py-0.5 shrink-0' 
      onClick={()=>{copyPasswordToClipBoard()}}
      >copy</button>
      </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 '>
        <input type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}></input>
      <label>length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
         onChange={()=>{setNumberAllowed((prev)=>!prev)}}></input>
        <label>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} id="charInput"
         onChange={()=>{setCharAllowed((prev)=>!prev)}}></input>
        <label>Character</label>
      </div>
     

     </div>
      </div>
       </>
  )
}

export default App
