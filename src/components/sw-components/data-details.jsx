import ItemDetails, { Record } from "./item-details"
import { withService } from "../hoc-helpers"

const DataDetails = fieldMap => props => (
    <ItemDetails {...props}>{
        Object.keys(fieldMap).map(field => (
            <Record 
                field={field} 
                label={fieldMap[field]}
            />
        ))
    }</ItemDetails>
)

const PersonDetails = withService(serv => ({ getData: serv.getPerson }))(DataDetails({
    gender: "Gender",
    eyeColor: "Eye Color",
    birthYear: "Birth year"
}))
const PlanetDetails = withService(serv => ({ getData: serv.getPlanet }))(DataDetails({
    population: "Population",
    rotationPeriod: "Rotation Period",
    diameter: "Diameter"
}))
const StarshipDetails = withService(serv => ({ getData: serv.getStarship }))(DataDetails({
    model: "Model",
    length: "Length",
    costInCredits: "Cost"
}))

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}