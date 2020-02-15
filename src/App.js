import React, { Component } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList
} from './components'

import './index.css'

export default class App extends Component {
  // state = {
  //   title: '待办事项列表'
  // }
  // 只有类组件下才有state，函数式组件没有状态
  // 函数式组件又称无状态组件，类组件又称有状态组件
  constructor() {
    super()
    this.state = {
      title: '待办事项列表',
      desc: <i>今日事今日毕</i>
    }
  }
  render() {
    return (
      <div>
        <TodoHeader title={this.state.title} x='1' y='2' n={2} m={3}>
          {this.state.desc}
        </TodoHeader>
        <TodoInput btnText="ADD"/>
        <TodoList />
        <h1>组件</h1>
      </div>
    )
  }
}
