import ItemDetails, { Record } from "../item-details"
import { withService } from "../hoc-helpers"

const PersonDetails = props => (
    <ItemDetails {...props}>
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>
)

export default withService(serv => ({ getData: serv.getPerson }))(PersonDetails)
