import { Redirect } from "react-router-dom"

export default SecretPage = ({ isVerified }) => (
    !isVerified ? <Redirect to="/login"/> :
    <div className="jumbotron text-center">
        <h3>Attention!!! Thank you for your attention</h3>
    </div>
)