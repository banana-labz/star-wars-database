import React from "react"

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import Header from "components/Header"
import RandomPlanet from "components/RandomPlanet"
import ServiceProvider from "components/ServiceProvider"

const App = () => (
  <ServiceProvider>
    <BrowserRouter>
      <Header />
      <section className="px-8">
        <RandomPlanet />
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="home" element={<>home</>} />
          <Route path="error" element={<>error</>} />
        </Routes>
      </section>
    </BrowserRouter>
  </ServiceProvider>
)

export default App
