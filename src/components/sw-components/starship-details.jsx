import ItemDetails, { Record } from "../item-details"
import { withService } from "../hoc-helpers"

const StarshipDetails = props => (
    <ItemDetails {...props}>
        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>
    </ItemDetails>
)

export default withService(serv => ({ getData: serv.getStarship }))(StarshipDetails)