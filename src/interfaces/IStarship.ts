import IBaseEntity from "./IBaseEntity"

export default interface IStarship extends IBaseEntity {
  model: string
  manufacturer: string
  costInCredits: string
  length: string
  crew: number
  passengers: number
  cargoCapacity: number
}