import { message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
//   useEffect(()=>{
//         handleLogin()
//   },[])
  const handleLogin = ()=>{
    //   if(email == null && email == ""){
    //       message.warning("Please fill in email")
    //   }
      const params = {
          "email" : email,
        "password": password
    }
    axios.post("http://localhost:8000/api/login",params).then(res=>{
        if(res.data.user){
            localStorage.setItem("is_login","1")
            window.location.href = "/"
        }else{
            message.error("user not found")    
        }
       
    }).catch(err=>{
        console.log(err);
    })
  }
  return (
    <div>
      <h2>Login</h2>
      <input placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <input placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
