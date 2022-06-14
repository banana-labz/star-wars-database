import React from "react"

import ErrorCard from "components/ErrorCard"

type ErrorBoundryProps = {
  children: React.ReactNode | React.ReactNode[]
}

type ErrorBoundryState = {
  error?: string
}

export default class ErrorBoundry extends React.Component<ErrorBoundryProps, ErrorBoundryState> {
  state = {
    error: undefined
  }
  
  componentDidCatch(error, info) {
    this.setState({ error: info })
  }

  render() {
    const { error } = this.state
    return error
      ? <ErrorCard error={error} />
      : this.props.children
  }
}