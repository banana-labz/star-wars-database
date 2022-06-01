import IService from "interfaces/IService"

import requestDataArrayFactory from "./requestDataArrayFactory"
import requestDataFactory from "./requestDataFactory"

import { formatPersonResponse, formatPlanetResponse, formatStarshipResponse } from "./format"

export default class SwapiService implements IService {
  private apiBase = "https://swapi.dev/api"

  public getPeople = requestDataArrayFactory(`${this.apiBase}/people`, formatPersonResponse)
  public getPlanets = requestDataArrayFactory(`${this.apiBase}/planets`, formatPlanetResponse)
  public getStarships = requestDataArrayFactory(`${this.apiBase}/starships`, formatStarshipResponse)

  public getPerson = requestDataFactory(`${this.apiBase}/people`, formatPersonResponse)
  public getPlanet = requestDataFactory(`${this.apiBase}/planets`, formatPlanetResponse)
  public getStarship = requestDataFactory(`${this.apiBase}/starships`, formatStarshipResponse)
}