import IService from "interfaces/IService"

import requestDataArrayFactory from "./requestDataArrayFactory"
import requestDataFactory from "./requestDataFactory"

import { people, planets, starships } from "./data"

export default class DummyService implements IService {
  public getPeople = requestDataArrayFactory(people)
  public getPlanets = requestDataArrayFactory(planets)
  public getStarships = requestDataArrayFactory(starships)

  public getPerson = requestDataFactory(people[0])
  public getPlanet = requestDataFactory(planets[0])
  public getStarship = requestDataFactory(starships[0])
}
