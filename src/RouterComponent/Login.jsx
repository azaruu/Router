import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const toHome=useNavigate()
  return (
    <div>
        <h1>LOGIN</h1>
       <form action="">
         <input type="email" name="" id="" placeholder='Email'/><br /><br />
         <input type="password" name="" id="" placeholder='Password'/><br /><br />
           <button onClick={()=>{toHome("/home")}}>Submit</button>
       </form>
    </div>
  )
}

export default Login
