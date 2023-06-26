import React, { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Login from './page/Login'
function App() {
  const isLogin = (localStorage.getItem("is_login") == "1")
  return (
    <BrowserRouter>
    {isLogin &&
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<h1>Route not found</h1>}/>
      </Routes>
    }
    {!isLogin &&
    <Routes>
       <Route path='*' element={<Login/>}/>
      <Route path='login' element={<Login/>} />
    </Routes>
    }
    </BrowserRouter>
  )
}

export default App
