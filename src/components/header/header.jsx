import "./header.css"

export const Header = () => (
    <div className="header d-flex">
        <h3><a href="">Star db</a></h3>
        <ul className="d-flex">
            <li>
                <a href="#">People</a>
            </li>
            <li>
                <a href="#">Planets</a>
            </li>
            <li>
                <a href="#">Starships</a>
            </li>
        </ul>
    </div>
)