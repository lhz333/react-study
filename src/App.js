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
      <div>
        <TodoHeader title="待办事项" x='1' y='2' n={2} m={3}>
          <i>今日事今日毕</i>
        </TodoHeader>
        <TodoInput btnText="ADD"/>
        <TodoList />
        <h1>组件</h1>
      </div>
    )
  }
}
