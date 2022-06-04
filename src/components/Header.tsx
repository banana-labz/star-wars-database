import React from "react"

import { Link } from "react-router-dom"

const Header = () => (
  <header className="flex flex-row items-center gap-8 px-8 pt-2 bg-transparent">
    <Link to="/home" children="STAR WARS DATABASE" className="title font-bold text-2xl text-white" />
    <nav className="flex flex-row gap-4">
      <Link to="#people" children="People" className="text-white cursor-pointer" />
      <Link to="#planets" children="Planets" className="text-white cursor-pointer" />
      <Link to="#starships" children="Starships" className="text-white cursor-pointer" />
    </nav>
  </header>
)

export default Header
