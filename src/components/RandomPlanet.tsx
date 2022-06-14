import React from "react"

import {
  useEffect,
  useState,
} from "react"

import { useService } from "context/ServiceContext"

import IPlanet from "interfaces/IPlanet"

import Spinner from "components/Spinner"

export type RandomPlanetProps = {
  updateDelay?: number
}

const RandomPlanet = ({ updateDelay = 10000 }: RandomPlanetProps) => {
  const [planet, setPlanet] = useState<IPlanet>()
  const { service } = useService()

  useEffect(() => {
    setTimeout(() => {
      const id = Math.floor(Math.random() * 10 + 2)
      // 0, 1 ids are not available
      service.getPlanet(id).then(setPlanet)
    }, updateDelay)
  }, [planet])

  const PlanetCard = planet !== undefined ? (
    <>
      <img
        src={planet.image}
        width={156}
        height={156}
      />
      <div className="flex flex-col items-start h-1/1">
        <p className="font-bold text-2xl">{planet.name}</p>
        <p>Population: {planet.population}</p>
        <p>Diameter: {planet.diameter}</p>
        <p>Rotation period: {planet.rotationPeriod}</p>
      </div>
    </>
  ) : <Spinner className="self-center" />

  return (
    <div className="flex flex-row gap-2 p-4 w-1/1 h-48 rounded-lg bg-stone">
      {PlanetCard}
    </div>
  )
}

export default RandomPlanet
