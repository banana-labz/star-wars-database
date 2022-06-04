import React from "react"

import { useState } from "react"

import IService from "interfaces/IService"
import SwapiService from "services/SwapiService"
import ServiceContext from "context/ServiceContext"

export type ServiceProviderProps = {
  children: React.ReactChild
}

const ServiceProvider = ({ children }: ServiceProviderProps) => {
  const [service, setService] = useState<IService>(new SwapiService())

  return (
    <ServiceContext.Provider value={{ service, setService }}>
      {children}
    </ServiceContext.Provider>
  )
}

export default ServiceProvider