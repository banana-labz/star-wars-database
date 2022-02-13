import React from "react"
import { ServiceConsumer } from "../service-context"

const withService = mapProps => Wrapped => props => (
    <ServiceConsumer>{
        service => {
            const serviceProps = mapProps(service)
            return <Wrapped {...props} {...serviceProps}/>
        }
    }</ServiceConsumer>
)

export default withService