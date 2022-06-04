import IService from "interfaces/IService"

import requestDataArrayFactory from "./requestDataArrayFactory"
import requestDataFactory from "./requestDataFactory"

import { formatPersonResponse, formatPlanetResponse, formatStarshipResponse } from "./format"

export default class SwapiService implements IService {
  public getPeople = requestDataArrayFactory(`${process.env.STARWARS_API_URL}/people`, formatPersonResponse)
  public getPlanets = requestDataArrayFactory(`${process.env.STARWARS_API_URL}/planets`, formatPlanetResponse)
  public getStarships = requestDataArrayFactory(`${process.env.STARWARS_API_URL}/starships`, formatStarshipResponse)

  public getPerson = requestDataFactory(`${process.env.STARWARS_API_URL}/people`, formatPersonResponse)
  public getPlanet = requestDataFactory(`${process.env.STARWARS_API_URL}/planets`, formatPlanetResponse)
  public getStarship = requestDataFactory(`${process.env.STARWARS_API_URL}/starships`, formatStarshipResponse)
}