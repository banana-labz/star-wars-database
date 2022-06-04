import React from "react"

import {
  useEffect,
  useState,
} from "react"

import useService from "hooks/useService"

import IPlanet from "interfaces/IPlanet"

export type RandomPlanetProps = {
  updateDelay?: number
}


const RandomPlanet = ({ updateDelay = 1000 }: RandomPlanetProps) => {
  const [planet, setPlanet] = useState<IPlanet>()
  const { service } = useService()

  useEffect(() => {
    setTimeout(() => {
      
    }, updateDelay)
  }, [planet])

  return (
    <div className="flex p-4 w-1/1 h-48 bg-stone">
      random-planet
    </div>
  )
}

export default RandomPlanet
