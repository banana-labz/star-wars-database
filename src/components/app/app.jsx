import { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import StarfieldAnimation from "react-starfield-animation"

import Header from "../header"
import RandomPlanet from "../random-planet"
import ErrorBoundry from "../error-boundry"
import SwapiService from "../../services/swapi-service"
import DummyService from "../../services/dummy-service"

import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    SecretPage 
} from "../pages"

import { StarshipDetails } from "../sw-components"
import { ServiceProvider } from "../service-context"

import "./app.css"

export default class App extends Component {

    state = { service: new SwapiService() }

    onServiceChange = () => this.setState(({ service }) => {
        const Service = service instanceof SwapiService ? DummyService : SwapiService
        return { service: new Service() }
    })

    render() {
        const { service } = this.state

        return (
            <ErrorBoundry>
                <ServiceProvider value={service} className>
                    <Router>
                        <div className="stardb-app">
                            <StarfieldAnimation className="stardb-app__background"/>
                            <div className="stardb-app__container">
                                <Header/>
                                <RandomPlanet/>
                                <Switch>
                                    <Route path="/" render={() => <h2>Welcome to the Star Wars database. May the force be with you</h2>} exact/>
                                    <Route path="/people/:id?" component={PeoplePage}/>
                                    <Route path="/planets" component={PlanetsPage}/>
                                    <Route path="/starships" exact component={StarshipsPage}/>
                                    <Route path="/starships/:id" render={({ match }) => <StarshipDetails itemId={match.params.id}/>}/>
                                    <Route path="/secret" render={() => <SecretPage onServiceChange={this.onServiceChange}/>}/>
                                    <Route render={() => <h2>Page not found</h2>}/>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </ServiceProvider>    
            </ErrorBoundry>
        )
    }
}
