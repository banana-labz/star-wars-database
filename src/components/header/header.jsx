import "./header.css"

export const Header = () => (
    <div className="header">
        <h3 style={{marginBottom: 0}}>
            <a href="https://duckduckgo.com/" className="header-main-text">
                Star db
            </a>
        </h3>
        <ul style={{marginBottom: 0}}>
            <li>
                <a href="https://duckduckgo.com/">People</a>
            </li>
            <li>
                <a href="https://duckduckgo.com/">Planets</a>
            </li>
            <li>
                <a href="https://duckduckgo.com/">Starships</a>
            </li>
        </ul>
    </div>
)