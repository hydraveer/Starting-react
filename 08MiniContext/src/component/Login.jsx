import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [Username,setUsername]=useState('')
    const [Password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({Username,Password})
    }
   return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Username'
        value={Username} 
        onChange={(e)=>setUsername(e.target.value)}
        />
        <input
        value={Password} 
        onChange={(e)=>setPassword(e.target.value)}
        type="text" placeholder='Password' />
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login