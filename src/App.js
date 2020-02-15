import React, { Component } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList
} from './components'
import './index.css'
export default class App extends Component {
  render() {
    return (
      <div className="abc">
        <TodoHeader />
        <TodoInput />
        <TodoList />
        <h1>组件</h1>
      </div>
    )
  }
}
