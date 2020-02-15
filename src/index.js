import React, { Component } from 'react'
import { render } from 'react-dom'

const Header = () => <h1>类组件!!</h1>

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

render(
  <App desc="类组件是继承React.Component的"/>, 
  document.querySelector('#root')
)
