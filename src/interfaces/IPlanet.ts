import IBaseEntity from "./IBaseEntity"

export default interface IPlanet extends IBaseEntity {
  population: string
  rotationPeriod: string
  diameter: string
}
