import { Header } from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'

import "./app.css"

export const App = () => (
    <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
            <div className="col-md-6">
            <ItemList />
            </div>
            <div className="col-md-6">
            <PersonDetails />
            </div>
        </div>
    </div>
)