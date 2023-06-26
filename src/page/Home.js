import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [pro, setPro] = useState([]) 
  useEffect(()=>{
    getList()
  },[])
  const handleLogout=()=>{
    localStorage.setItem("is_login","0")
    window.location.href = "/login"
  }
  const getList = ()=>{
      axios.get("http://localhost:8000/api/get-all-pro").then(res=>{
        setPro(res.data)
      })

  }
  return (
    <div>
      home
      <button onClick={handleLogout}>Logout</button>
      <h2>Product length {pro.length}</h2>
    </div>
  )
}
