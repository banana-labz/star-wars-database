import { Component } from "react"

import Header from "../header"
import RandomPlanet from "../random-planet"
import ErrorBoundry from "../error-boundry"
import SwapiService from "../../services/swapi-service"
import DummyService from "../../services/dummy-service"

/*
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    LoginPage,
    SecretPage 
} from "../pages"*/

import { ServiceProvider } from "../service-context"

import "./app.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import StarshipDetails from "../sw-components/starship-details"

export default class App extends Component {

    state = {
        service: new SwapiService(),
        isVerified: false
    }

    onLogin = () => this.setState({ isVerified: true })

    onServiceChange = () => this.setState(({ service }) => {
        const Service = service instanceof SwapiService ? DummyService : SwapiService
        return { service: new Service() }
    })

    render() {
        const { isVerified, service } = this.state

        return (
            <ErrorBoundry>
                <ServiceProvider value={service}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet/>
                            {/*<Switch>
                                <Route path="/" render={() => <h2>Welcome to Star-DB</h2>} exact/>
                                <Route path="/people/:id?" component={PeoplePage}/>
                                <Route path="/planets" component={PlanetsPage}/>
                                <Route path="/starships" exact component={StarshipsPage}/>
                                <Route path="/starships/:id" render={({ match }) => <StarshipDetails itemId={match.params.id}/>}/>
                                <Route path="/login" render={() => <LoginPage isVerified={isVerified} onLogin={this.onLogin}/>}/>
                                <Route path="/secret" render={() => <SecretPage isVerified={isVerified}/>}/>
                                <Route render={() => <h2>Page not found</h2>}/>
                            </Switch>*/}
                        </div>
                    </Router>
                </ServiceProvider>
            </ErrorBoundry>
        )
    }
}
