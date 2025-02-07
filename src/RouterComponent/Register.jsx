import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
       
    const tologin=useNavigate();
    
  return (
    <div>
        <h1>ReGiStEr</h1>
      <form>
          <input type="text" placeholder='Your Name'/><br /><br />
          <input type='email' placeholder='Email'/><br /><br />
          <input type="password" name="" id="" placeholder='Password'/><br /><br />
            <button onClick={()=>tologin("/login")}>Submit</button>
      </form>
    </div>
  )
}

export default Register
