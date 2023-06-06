import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Error from './Components/Error'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App