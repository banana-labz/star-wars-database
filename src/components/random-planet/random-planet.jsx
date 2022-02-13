import { Component } from "react"
import { compose, withService, withData } from "../hoc-helpers"

import "./random-planet.css"

class RandomPlanet extends Component {
    static defaultProps = { updateInterval: 10000 }

    componentDidMount() {
        this.interval = setInterval(this.props.getData, this.props.updateInterval)
    }

    componentWillUnmount() { clearInterval(this.interval) }

    render() {
        const { data: { image, name, population, rotationPeriod, diameter } } = this.props

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image" src={image} alt="planet"/>
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default compose(
    withService(service => ({ getData: () => service.getPlanet(Math.floor(Math.random() * 7) + 2) })),
    withData
)(RandomPlanet)