import IBaseEntity from "./IBaseEntity"
import IPerson from "./IPerson"
import IPlanet from "./IPlanet"
import IStarship from "./IStarship"

export default interface IService {
  getPeople: () => Promise<IPerson[]>
  getPlanets: () => Promise<IPlanet[]>
  getStarships: () => Promise<IStarship[]>

  getPerson: (id: IBaseEntity["id"]) => Promise<IPerson>
  getPlanet: (id: IBaseEntity["id"]) => Promise<IPlanet>
  getStarship: (id: IBaseEntity["id"]) => Promise<IStarship>
}