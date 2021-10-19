import { Component } from "react"
import { Fragment } from "react/cjs/react.production.min"
import { Spinner } from "../spinner/spinner"

import SwapiService from "../../services/swapi-service"

import "./person-details.css"

export default class PersonDetails extends Component {

    SWAPI = new SwapiService()

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.setState({ loading: true })
            this.updatePerson()
        }
    }

    updatePerson = () => {
        const { personId } = this.props
        if (personId == null) {
            return
        }
        
        this.SWAPI.getPerson(personId).then(person => 
            this.setState({ person, loading: false })
        )
    }

    render() {
        const { person,  loading } = this.state

        let card = <span>Select a person first</span>
        
        if (person !== null) {
            card = loading ? <Spinner/> : <PersonCard person={person}/>
        }

        return (
            <div className="person-details card">
                { card }
            </div>
        )
    }
}

const PersonCard = ({ person }) => {

    const { id, name, gender, birthYear, eyeColor } = person
    return (
        <Fragment>
            <img
                alt="person"
                className="person-image" 
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            />
            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{ gender }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{ birthYear }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{ eyeColor }</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}