import IPerson from "interfaces/IPerson"
import IPlanet from "interfaces/IPlanet"
import IStarship from "interfaces/IStarship"

import { PersonResponse, PlanetResponse, StarshipResponse } from "./types"

const IMAGE_BASE = "https://starwars-visualguide.com/assets/img"

const urlExtractId = (url: string) => {
  const matches = url.match(/\d+/)
  return matches ? +matches[0] : 0
}

export const formatPlanetResponse = (response: PlanetResponse): IPlanet => {
  const id = urlExtractId(response.url)
  return {
    id: id,
    image: `${IMAGE_BASE}/planets/${id}.jpg`,
    name: response.name,
    population: response.population,
    rotationPeriod: response.rotation_period,
    diameter: response.diameter
  }
}

export const formatStarshipResponse = (response: StarshipResponse): IStarship => {
  const id = urlExtractId(response.url)
  return {
    id: id,
    image: `${IMAGE_BASE}/starships/${id}.jpg`,
    name: response.name,
    model: response.model,
    manufacturer: response.manufacturer,
    costInCredits: response.cost_in_credits,
    length: response.length,
    crew: +response.crew,
    passengers: +response.passengers,
    cargoCapacity: +response.cargo_capacity,
  }
}

export const formatPersonResponse = (response: PersonResponse): IPerson => {
  const id = urlExtractId(response.url)
  return {
    id: id,
    image: `${IMAGE_BASE}/people/${id}.jpg`,
    name: response.name,
    gender: response.gender,
    birthYear: response.birth_year,
    eyeColor: response.eye_color
  }
}