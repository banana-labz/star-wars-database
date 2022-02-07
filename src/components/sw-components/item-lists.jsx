import ItemList from "../item-list"
import {
    withData,
    withSwapiService,
    withChildFunction,
    compose 
} from "../hoc-helpers"

const wrapName = ({ name }) => <span>{name}</span>

const PersonList = compose(
    withSwapiService(swapi => ({ getData: swapi.getAllPeople })),
    withData,
    withChildFunction(wrapName)
)(ItemList)

const PlanetList = compose(
    withSwapiService(swapi => ({ getData: swapi.getAllPlanets })),
    withData,
    withChildFunction(wrapName)
)(ItemList)

const StarshipList = compose(
    withSwapiService(swapi => ({ getData: swapi.getAllStarships })),
    withData,
    withChildFunction(({ model, name}) => <span>{name}({model})</span>)
)(ItemList)

export {
    PersonList,
    PlanetList,
    StarshipList
}
