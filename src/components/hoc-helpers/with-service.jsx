import React from 'react'
import { ServiceConsumer } from '../service-context'

const withService = mapMethodsToProps => Wrapped => props => (
    <ServiceConsumer>{
        service => {
            const serviceProps = mapMethodsToProps(service)
            return <Wrapped {...props} {...serviceProps}/>
        }
    }</ServiceConsumer>
)

export default withService