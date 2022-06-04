import { createContext } from "react"

import IService from "interfaces/IService"
import SwapiService from "services/SwapiService"

interface IServiceContext {
  service: IService
  setService: (service: IService) => void
}

export const initialService: IServiceContext = {
  service: new SwapiService(),
  setService: () => {},
}

const ServiceContext = createContext(initialService)

export default ServiceContext
