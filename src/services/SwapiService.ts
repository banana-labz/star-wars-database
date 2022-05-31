import IBaseEntity from "../interfaces/IBaseEntity"
import IPerson from "../interfaces/IPerson"
import IPlanet from "../interfaces/IPlanet"
import IService from "../interfaces/IService"
import IStarship from "../interfaces/IStarship"

type PlanetResponse = {
  url: string
  name: string
  population: string
  rotation_period: string
  diameter: string
}

type StarshipResponse = {
  url: string
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  cargo_capacity: string
}

type PersonResponse = {
  url: string
  name: string
  gender: string
  birth_year: string
  eye_color: string
}

export default class SwapiService implements IService {
  private apiBase = "https://swapi.dev/api"
  private imageBase = "https://starwars-visualguide.com/assets/img"

  private urlExtractId = (url: string) => {
    const matches = url.match(/\d+/)
    return matches ? +matches[0] : 0
  }

  private buildErrorMessage = (url: string, status: number) => (
    `Could not fetch ${url}, received ${status}`
  )

  private formatPlanetResponse = (response: PlanetResponse): IPlanet => {
    const id = this.urlExtractId(response.url)
    return {
      id: id,
      image: `${this.imageBase}/planets/${id}.jpg`,
      name: response.name,
      population: response.population,
      rotationPeriod: response.rotation_period,
      diameter: response.diameter
    }
  }

  private formatStarshipResponse = (response: StarshipResponse): IStarship => {
    const id = this.urlExtractId(response.url)
    return {
      id: id,
      image: `${this.imageBase}/starships/${id}.jpg`,
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

  private formatPersonResponse = (response: PersonResponse): IPerson => {
    const id = this.urlExtractId(response.url)
    return {
      id: id,
      image: `${this.imageBase}/people/${id}.jpg`,
      name: response.name,
      gender: response.gender,
      birthYear: response.birth_year,
      eyeColor: response.eye_color
    }
  }

  private fetchDataArrayFactory = <From, To>(url: string, convertData: (data: From) => To) => () => (
    fetch(`${this.apiBase}/${url}`).then(response => {
      if (!response.ok) {
        throw new Error(this.buildErrorMessage(url, response.status))
      }
      return response.json()
    }).then<To[]>(json => json.results.map(convertData))
  )
  
  public fetchPeople = this.fetchDataArrayFactory<PersonResponse, IPerson>("people", this.formatPersonResponse)
  public fetchPlanets = this.fetchDataArrayFactory<PlanetResponse, IPlanet>("planets", this.formatPlanetResponse)
  public fetchStarships = this.fetchDataArrayFactory<StarshipResponse, IStarship>("starships", this.formatStarshipResponse)

  private fetchDataFactory = <From, To>(url: string, convertData: (data: From) => To) => (i: IBaseEntity["id"]) => (
    fetch(`${this.apiBase}/${url}/${i}`).then(response => {
      if (!response.ok) {
        throw new Error(this.buildErrorMessage(url, response.status))
      }
      return response.json()
    }).then<To>(convertData)
  )

  public fetchPerson = this.fetchDataFactory<PersonResponse, IPerson>("people", this.formatPersonResponse)
  public fetchPlanet = this.fetchDataFactory<PlanetResponse, IPlanet>("planets", this.formatPlanetResponse)
  public fetchStarship = this.fetchDataFactory<StarshipResponse, IStarship>("starships", this.formatStarshipResponse)
}