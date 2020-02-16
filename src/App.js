import React, { Component, Fragment } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
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
      desc: <i>今日事今日毕</i>,
      artice: '<div><h1>文章标题</h1><i>作者</i></div>',
      todos: [{
        id: 1,
        title: '吃饭',
        assignee: 'jenny',
        isCompleted: true
      },{
        id: 2,
        title: '睡觉',
        assignee: 'nicai',
        isCompleted: false
      }]
    }
  }
  render() {
    return (
      <Fragment>
        {/* {
          this.state.artice
        }
        {
          <div dangerouslySetInnerHTML={{__html: this.state.artice}} />
        }
        {
          this.state.todos.map(todo => {
            return <div key={todo.id}>{todo.title}</div>
          })
        } */}
        <TodoHeader title={this.state.title} x='1' y='2' n={2} m={3}>
          {this.state.desc}
        </TodoHeader>
        <TodoInput btnText="ADD"/>
        <TodoList todos={this.state.todos}/>
        <h1>组件</h1>
        <Like></Like>
      </Fragment>
    )
  }
}
