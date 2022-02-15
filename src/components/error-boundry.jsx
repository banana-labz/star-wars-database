import { Component } from "react"

import ErrorIndicator from "./error-indicator"

export default class ErrorBoundry extends Component {

    state = { error: false }

    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        return this.state.error ? <ErrorIndicator/> : this.props.children
    }
}
