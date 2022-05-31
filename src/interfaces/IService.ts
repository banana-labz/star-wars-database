import IBaseEntity from "./IBaseEntity"
import IPerson from "./IPerson"
import IPlanet from "./IPlanet"
import IStarship from "./IStarship"

export default interface IService {
  fetchPeople: () => Promise<IPerson[]>
  fetchPlanets: () => Promise<IPlanet[]>
  fetchStarships: () => Promise<IStarship[]>

  fetchPerson: (id: IBaseEntity["id"]) => Promise<IPerson>
  fetchPlanet: (id: IBaseEntity["id"]) => Promise<IPlanet>
  fetchStarship: (id: IBaseEntity["id"]) => Promise<IStarship>
}