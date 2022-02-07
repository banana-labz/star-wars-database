import { Component } from "react"

import "./item-details.css"

const Record = ({ item, field, label }) => (
    <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
    </li>
)

export { Record }

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prev) {
        const idMatch = this.props.itemId === prev.itemId
        const getDataMatch = this.props.getData === prev.getData
        const getImageMatch = this.props.getImageUrl === prev.getImageUrl
        if (!idMatch || !getDataMatch || !getImageMatch) {
            this.updateItem()
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props
        if (!itemId) return

        getData(itemId).then(item =>
            this.setState({
                item,
                image: getImageUrl(item)
            })
        )
    }

    render() {
        const { item, image } = this.state

        if (!item) {
            return <span>Select an item</span>
        }

        const { name } = item

        return (
            <div className="item-details card">
                <img className="item-image" src={image} alt="item"/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">{
                        React.Children.map(this.props.children, child => 
                            React.cloneElement(child, { item })
                        )
                    }</ul>
                </div>
            </div>
        )
    }
}
