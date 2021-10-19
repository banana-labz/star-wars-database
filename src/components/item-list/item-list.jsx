import { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import { Spinner } from '../spinner/spinner';

import './item-list.css'

export default class ItemList extends Component {

    SWAPI = new SwapiService();

    state = {
        data: null
    }

    componentDidMount() {
        this.SWAPI.getAllPeople().then(data =>
            this.setState({ data })
        )
    }

    renderList = arr => {
        return arr.map(({ id, name }) => {
            return (
                <li 
                    className="list-group-item" 
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            )
        })
    }

    render() {
        const { data } = this.state

        const list = data ? this.renderList(data) : <Spinner/>

        return (
            <ul className="item-list list-group">
                { list }
            </ul>
        )
    }
}