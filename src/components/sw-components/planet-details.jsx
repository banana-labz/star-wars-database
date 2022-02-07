import ItemDetails, { Record } from "../item-details"
import { withSwapiService } from "../hoc-helpers"

const PlanetDetails = props => (
    <ItemDetails {...props}>
        <Record field="population" label="Population"/>
        <Record field="rotationPeriod" label="Rotation Period"/>
        <Record field="diameter" label="Diameter"/>
    </ItemDetails>
)

const mapMethodsToProps = swapi => ({
    getData: swapi.getPlanet,
    getImageUrl: swapi.getPlanetImage
})

export default withSwapiService(mapMethodsToProps)(PlanetDetails)