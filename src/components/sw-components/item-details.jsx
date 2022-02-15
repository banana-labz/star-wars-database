import { Component, Children, cloneElement } from "react"

import "./item-details.css"

const Record = ({ item, field, label }) => (
    <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
    </li>
)

export { Record }

export default class ItemDetails extends Component {

    state = { item: null }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prev) {
        const { itemId, getData } = this.props
        if (itemId !== prev.itemId || getData !== prev.getData) {
            this.updateItem()
        }
    }

    updateItem() {
        const { itemId, getData } = this.props
        if (!itemId) return

        getData(itemId).then(item => this.setState({ item }))
    }

    render() {
        const { item } = this.state

        if (!item) {
            return <div/>
        }

        const { name } = item

        return (
            <div className="item-details card">
                <img className="item-image" src={item.image} alt="item"/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">{
                        Children.map(this.props.children, child => 
                            cloneElement(child, { item })
                        )
                    }</ul>
                </div>
            </div>
        )
    }
}
