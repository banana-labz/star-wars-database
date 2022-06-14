import React from "react"

import {
  createContext,
  useReducer,
  useContext,
} from "react"

import IService from "interfaces/IService"

import SwapiService from "services/SwapiService"
import DummyService from "services/DummyService"

interface IServiceContext {
  service: IService,
  switchService: () => void,
}

const initialState = {
  service: new SwapiService(),
  switchService: () => {},
}

const ServiceContext = createContext<IServiceContext>(initialState)

enum Actions {
  SWITCH_SERVICE = "SWITCH_SERVICE"
}

type ServiceProviderProps = {
  children: React.ReactChild
}

export const ServiceProvider = ({ children }: ServiceProviderProps) => {
  const [state, dispatch] = useReducer((state: IServiceContext, action: { type: Actions }) => {
    if (action.type == Actions.SWITCH_SERVICE) {
      const service = state.service instanceof SwapiService
        ? new DummyService()
        : new SwapiService()
      return { ...state, service }
    } else {
      return state
    }
  }, initialState)


  const switchService = () => {
    dispatch({ type: Actions.SWITCH_SERVICE })
  }

  return (
    <ServiceContext.Provider value={{ service: state.service, switchService }}>
      {children}
    </ServiceContext.Provider>
  )
}

export const useService = () => (
  useContext(ServiceContext)
)