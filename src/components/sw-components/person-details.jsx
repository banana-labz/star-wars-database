import ItemDetails, { Record } from "../item-details"
import { withSwapiService } from "../hoc-helpers"

const PersonDetails = props => (
    <ItemDetails {...props}>
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>
)

const mapMethodsToProps = swapi => ({
    getData: swapi.getPerson,
    getImageUrl: swapi.getPersonImage
})

export default withSwapiService(mapMethodsToProps)(PersonDetails)
