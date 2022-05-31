import IBaseEntity from "../interfaces/IBaseEntity"
import IService from "../interfaces/IService"

const dummyPeople = [
  {
    id: 1,
    image: "https://placeimg.com/400/500/people/1.png",
    name: "Bilbo Baggins [TEST DATA]",
    gender: "male",
    birthYear: "long ago",
    eyeColor: "dark brown",
  },
  {
    id: 2,
    image: "https://placeimg.com/400/500/people/2.png",
    name: "Frodo Baggins [TEST DATA]",
    gender: "male",
    birthYear: "long ago",
    eyeColor: "dark brown",
  }
]

const dummyPlanets = [
  {
    id: 1,
    image: "https://placeimg.com/400/400/nature/1.png",
    name: "Earth [TEST DATA]",
    population: "7.530.000.000",
    rotationPeriod: "23 hours 56 seconds",
    diameter: "12.742 km"
  },
  {
    id: 2,
    image: "https://placeimg.com/400/400/nature/2.png",
    name: "Venus [TEST DATA]",
    population: "not known",
    rotationPeriod: "243 days",
    diameter: "12.104 km"
  }
]

const dummyStarship = [
  {
    id: 1,
    image: "https://placeimg.com/400/500/tech/1.png",
    name: "USS Enterprise [TEST DATA]",
    model: "NCC-1701-C",
    manufacturer: "Northrop Grumman Shipbuilding",
    costInCredits: "not known",
    length: "approx 300 meters",
    crew: 1000,
    passengers: 50,
    cargoCapacity: 100,
  }
]

export default class DummyService implements IService {
  private delay = 1337

  private fetchDataArrayFactory = <T>(arr: T[]) => () => (
    new Promise<T[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(arr)
      }, this.delay)
    })
  )

  private fetchDataFactory = <T>(data: T) => (id: IBaseEntity["id"]) => (
    new Promise<T>((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, this.delay)
    })
  )

  public fetchPeople = this.fetchDataArrayFactory(dummyPeople)
  public fetchPlanets = this.fetchDataArrayFactory(dummyPlanets)
  public fetchStarships = this.fetchDataArrayFactory(dummyStarship)

  public fetchPerson = this.fetchDataFactory(dummyPeople[0])
  public fetchPlanet = this.fetchDataFactory(dummyPlanets[0])
  public fetchStarship = this.fetchDataFactory(dummyStarship[0])
}
