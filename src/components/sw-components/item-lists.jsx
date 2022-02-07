import ItemList from "../item-list"
import {
    withData,
    withService,
    withChildFunction,
    compose 
} from "../hoc-helpers"

const wrapName = ({ name }) => <span>{name}</span>

const PersonList = compose(
    withService(serv => ({ getData: serv.getAllPeople })),
    withData,
    withChildFunction(wrapName)
)(ItemList)

const PlanetList = compose(
    withService(serv => ({ getData: serv.getAllPlanets })),
    withData,
    withChildFunction(wrapName)
)(ItemList)

const StarshipList = compose(
    withService(serv => ({ getData: serv.getAllStarships })),
    withData,
    withChildFunction(({ model, name}) => <span>{name}({model})</span>)
)(ItemList)

export {
    PersonList,
    PlanetList,
    StarshipList
}
