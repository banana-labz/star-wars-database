import IBaseEntity from "interfaces/IBaseEntity"

const DELAY = 1337

const fetchDataFactory = <T>(data: T) => (id: IBaseEntity["id"]) => (
  new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, DELAY)
  })
)

export default fetchDataFactory;