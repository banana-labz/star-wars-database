import React from "react"

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import { ServiceProvider } from "context/ServiceContext"

import Header from "components/Header"
import RandomPlanet from "components/RandomPlanet"
import ErrorBoundry from "components/ErrorBoundry"

const App = () => (
  <ServiceProvider>
    <BrowserRouter>
      <ErrorBoundry>
        <Header />
        <section className="px-14">
          <RandomPlanet />
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="home" element={<>home</>} />
            <Route path="error" element={<>error</>} />
          </Routes>
        </section>
      </ErrorBoundry>
    </BrowserRouter>
  </ServiceProvider>
)

export default App
