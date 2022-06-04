import React from "react"

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import Header from "components/Header"

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route path="home" element={<>home</>} />
      <Route path="error" element={<>error</>} />
    </Routes>
  </BrowserRouter>
)

export default App
