import { Component } from "react"
import { PlanetDetails, PlanetList } from "../sw-components"
import Row from "../row"

export default class PlanetsPage extends Component {
    state = { selectedItem: null }

    render() {
        const { selectedItem } = this.state

        return (
            <Row
                left={<PlanetList onItemSelected={selectedItem => this.setState({ selectedItem })}/>}
                right={<PlanetDetails itemId={selectedItem}/>}
            />
        )
    }
}