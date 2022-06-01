import IBaseEntity from "interfaces/IBaseEntity"

import createError from "./createError"

const requestDataFactory = <From, To>(url: string, convertData: (data: From) => To) => (
  (i: IBaseEntity["id"]) => {
    const endPoint = `${url}/${i}`
    return (
      fetch(endPoint).then(response => {
        if (!response.ok) {
          throw createError(endPoint, response.status)
        }
        return response.json()
      }).then<To>(convertData)
    )
  }
)

export default requestDataFactory
