import { Redirect } from "react-router-dom"

export default LoginPage = ({ isVerified, onLogin }) => (
    isVerified ? <Redirect to="/"/> :
    <div className="jumbotron">
        <p>Log in to see THE secret page!</p>
        <button
            className="btn btn-primary"
            onClick={onLogin}>
            Log in
        </button>
    </div>
)