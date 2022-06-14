import IService from "interfaces/IService"

import requestDataArrayFactory from "./requestDataArrayFactory"
import requestDataFactory from "./requestDataFactory"

import {
  formatPersonResponse,
  formatPlanetResponse,
  formatStarshipResponse,
} from "./format"

export default class SwapiService implements IService {
  public getPeople = requestDataArrayFactory("people", formatPersonResponse)
  public getPlanets = requestDataArrayFactory("planets", formatPlanetResponse)
  public getStarships = requestDataArrayFactory("starships", formatStarshipResponse)

  public getPerson = requestDataFactory("people", formatPersonResponse)
  public getPlanet = requestDataFactory("planets", formatPlanetResponse)
  public getStarship = requestDataFactory("starships", formatStarshipResponse)
}