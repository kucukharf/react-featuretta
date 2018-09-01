import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Featuretta extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="featuretta">
       <h1> {this.props.title} </h1>
      </div>
    )
  }
}

Featuretta.defaultProps = {
  title: "sample title"
}

Featuretta.propTypes = {
  title: PropTypes.string
}
