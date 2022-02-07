import { Redirect } from "react-router-dom"

const SecretPage = ({ isVerified }) => (
    !isVerified ? <Redirect to="/login"/> :
    <div className="jumbotron text-center">
        <h3>Attention!!! Thank you for your attention</h3>
    </div>
)

export default SecretPage