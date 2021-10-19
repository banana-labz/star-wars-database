import { Component } from "react"
import { Header } from "../header/header"

import RandomPlanet from "../random-planet/random-planet"
import PeoplePage from "../people-page/people-page"

import "./app.css"

export default class App extends Component {

    state = {
        displayPlanet: true
    }

    render() {
        const { displayPlanet } = this.state

        const planet = displayPlanet ? <RandomPlanet/> : null

        return (
            <div>
                <Header />
                { planet }
                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={() => this.setState(({ displayPlanet }) => {
                        return { displayPlanet: !displayPlanet }
                    })}
                >
                    Toggle
                </button>
                <PeoplePage/>
            </div>
        )
    }
}