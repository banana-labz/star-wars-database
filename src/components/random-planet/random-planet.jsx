import { Component, Fragment } from "react"
import { Spinner } from "../spinner/spinner"
import { ErrorIndicator } from "../error-indicator/error-indicator"

import SwapiService from "../../services/swapi-service"

import "./random-planet.css"

export default class RandomPlanet extends Component {
    
    _updateDelay = 10000
    
    SWAPI = new SwapiService()

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, this._updateDelay)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 7) + 2
        this.SWAPI.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError)
    }

    onPlanetLoaded = planet => {
        this.setState({ planet, loading: false, error: false })
    }

    onError = () => this.setState({ error: true, loading: false })

    render() {
        const { planet, loading, error } = this.state

        const displayData = !(loading || error)

        return (
            <div className="random-planet jumbotron rounded">
                { error && <ErrorIndicator/> }
                { loading && <Spinner/> }
                { displayData && <PlanetForm planet={planet}/> }
            </div>
        )
    }
}

const PlanetForm = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet

    return (
        <Fragment>
            <img 
                alt="planet" 
                className="planet-image" 
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
            />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}
