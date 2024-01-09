import React from 'react'
import Auth from './pages/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Auth />} />
        <Route path={'/main'} element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
