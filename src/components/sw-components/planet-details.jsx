import ItemDetails, { Record } from "../item-details"
import { withService } from "../hoc-helpers"

const PlanetDetails = props => (
    <ItemDetails {...props}>
        <Record field="population" label="Population"/>
        <Record field="rotationPeriod" label="Rotation Period"/>
        <Record field="diameter" label="Diameter"/>
    </ItemDetails>
)

export default withService(serv => ({ getData: serv.getPlanet }))(PlanetDetails)