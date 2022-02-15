const SecretPage = ({ onServiceChange }) => (
    <div className="jumbotron text-center">
        <h2>THE secret page</h2>
        <button onClick={onServiceChange} className="btn btn-primary btn-sm">
            Change Service
        </button>
    </div>
)

export default SecretPage