const withChildFunction = func => Wrapped => props => <Wrapped {...props}>{func}</Wrapped>

export default withChildFunction;