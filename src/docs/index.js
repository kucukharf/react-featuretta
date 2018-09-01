import React, { Component } from 'react'
import { render } from 'react-dom'

import Featuretta from '../component'
// In your code this would be:
// import Toggle from 'react-toggle'

import '../../style.css'
import './style.css'



class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: "updated title"
    }
  }


  render () {
    return (
      <form ref='breakfastForm'>
        <h1>react-featuretta</h1>

        {/* Installation */}

        <div className='example'>
          <div>Installation</div>
          <pre>
            {`npm install react-featuretta --save`}
          </pre>
          <pre>{`import Featuretta from 'react-featuretta'`}</pre>
          <p>Or if you're not using the ES6 module format yet:</p>
          <pre>{`var Featuretta = require('react-featuretta')`}</pre>
          <p>Include the component's <a href='https://raw.githubusercontent.com/instructure-react/react-featuretta/master/style.css'>CSS</a>.</p>
        </div>

        {/* No icons */}

        <div className='example'>
            <Featuretta
              title={this.state.title} />
          <pre>
            {`<Featuretta title={this.state.title} />`}
          </pre>
        </div>
      </form>
    )
  }
}

App.displayName = 'App'

render(<App />, document.getElementById('application'))
