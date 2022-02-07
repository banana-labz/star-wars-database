import ItemDetails, { Record } from "../item-details"
import { withService } from "../hoc-helpers"

const PlanetDetails = props => (
    <ItemDetails {...props}>
        <Record field="population" label="Population"/>
        <Record field="rotationPeriod" label="Rotation Period"/>
        <Record field="diameter" label="Diameter"/>
    </ItemDetails>
)

const mapMethodsToProps = serv => ({
    getData: serv.getPlanet,
    getImageUrl: serv.getPlanetImage
})

export default withService(mapMethodsToProps)(PlanetDetails)