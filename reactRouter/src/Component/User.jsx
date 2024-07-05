import React from 'react'
import { useParams } from 'react-router-dom'




function User() {
    const {userId}  = useParams()
    
  return (
    <div className='bg-green-600 text-white text-center'>
      <label>User:{userId}</label>
    </div>
  )
}

export default User
