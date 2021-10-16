import "./header.css"

export const Header = () => (
    <div className="header">
        <h3 style={{marginBottom: 0}}>
            <a href="" className="header-main-text">
                Star db
            </a>
        </h3>
        <ul style={{marginBottom: 0}}>
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