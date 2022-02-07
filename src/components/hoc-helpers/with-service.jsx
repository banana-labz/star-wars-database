import React from 'react'
import { ServiceConsumer } from '../service-context'

export default withService = mapMethodsToProps => Wrapped => props => (
    <ServiceConsumer>{
        service => {
            const serviceProps = mapMethodsToProps(service)
            return <Wrapped {...props} {...serviceProps}/>
        }
    }</ServiceConsumer>
)