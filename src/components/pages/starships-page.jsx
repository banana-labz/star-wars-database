import { StarshipList } from "../sw-components"
import { withRouter } from "react-router-dom"

const StarshipsPage = ({ history }) => <StarshipList onItemSelected={(id) => history.push(`/starships/${id}`)}/>

export default withRouter(StarshipsPage)
