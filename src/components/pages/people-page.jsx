import { withRouter } from "react-router-dom"
import { PersonDetails, PersonList } from "../sw-components"
import Row from "../row"

const PeoplePage = ({ history, match }) => {
    const { id } = match.params
    return (
        <Row
            left={<PersonList onItemSelected={id => history.push(`/people/${id}`)}/>}
            right={<PersonDetails itemId={id}/>}
        />
    )
}

export default withRouter(PeoplePage)
