import React from "react"

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import Header from "components/Header"
import RandomPlanet from "components/RandomPlanet"

const App = () => (
  <BrowserRouter>
    <Header />
    <RandomPlanet />
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route path="home" element={<>home</>} />
      <Route path="error" element={<>error</>} />
    </Routes>
  </BrowserRouter>
)

export default App
