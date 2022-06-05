import { createContext } from "react"

import IService from "interfaces/IService"
import SwapiService from "services/SwapiService"

interface IServiceContext {
  service: IService
  setService: (service: IService) => void
}

const ServiceContext = createContext<IServiceContext>({
  service: new SwapiService(),
  setService: () => {},
})

export default ServiceContext
