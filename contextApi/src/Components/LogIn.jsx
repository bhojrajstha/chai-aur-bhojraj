
import React, {useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function LogIn() {
    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")

  const {setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,password})
    }
  return (
    <div>
      <h1>Log In</h1>
      <input 
      value={username}
      onChange={(e)=> setUserName(e.target.value)}
      type='text' placeholder='username'/>
      <input
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      type='password' placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LogIn
