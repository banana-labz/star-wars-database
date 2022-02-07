import { Link } from 'react-router-dom'
import "./header.css"

export default Header = ({ onServiceChange }) => (
    <div className="header d-flex">
        <h3><Link to="/">Star DB</Link></h3>
        <ul className="d-flex">
            <li><Link to="/people/">People</Link></li>
            <li><Link to="/planets/">Planets</Link></li>
            <li><Link to="/starships/">Starships</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/secret">Secret</Link></li>
        </ul>

        <button onClick={onServiceChange} className="btn btn-primary btn-sm">
            Change Service
        </button>
    </div>
)

/*
<div className="header">
    <h3>
        <a href="" className="header-main-text">
            Star DB
        </a>
    </h3>
    <ul>
        <li>
            <a href="">People</a>
        </li>
    <ul/>
</div>
*/