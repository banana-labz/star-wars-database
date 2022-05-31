import IBaseEntity from "./IBaseEntity"

export default interface IPerson extends IBaseEntity {
  gender: string
  birthYear: string
  eyeColor: string
}