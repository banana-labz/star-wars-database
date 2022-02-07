const URL_BASE = "https://starwars-visualguide.com/assets/img/planets/"

import { Component, Fragment } from "react"
import PropTypes from "prop-types"

import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"
import SwapiService from "../../services/swapi-service"

import "./random-planet.css"

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet

    return (
        <Fragment>
        <img className="planet-image" src={`${URL_BASE}${id}.jpg`} alt="planet"/>
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
        </Fragment>
    )
}

export default class RandomPlanet extends Component {
    static defaultProps = { updateInterval: 10000 }
    static propTypes = { updateInterval: PropTypes.number }

    state = {
        planet: {},
        loading: true
    }

    swapi = new SwapiService()

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, this.props.updateInterval)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = planet => this.setState({ planet, loading: false, error: false })

    onError = err => this.setState({ error: true, loading: false })

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 7) + 2
        this.SWAPI.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError)
    }

    render() {
        const { planet, loading, error } = this.state

        return (
            <div className="random-planet jumbotron rounded">
                {error && <ErrorIndicator/>}
                {loading && <Spinner/>}
                {!(loading || error) && <PlanetView planet={planet}/>}
            </div>
        )
    }
}