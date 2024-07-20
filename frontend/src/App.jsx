import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App