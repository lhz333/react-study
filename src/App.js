import React, { Component, Fragment } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like,
  Count,
  CountCopy
} from './components'
import { CounterProvider } from './components/counterStore'

import './index.css'

import { getTodos } from './services'

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
      todos: [],
      isLoading: false
    }
  }

  getData = () => {
    this.setState({
      isLoading: true
    })
    getTodos()
      .then(res => {
        // console.log(res.data)
        if (res.status === 200) {
          this.setState({
            todos: res.data
          })
        } else {
          // 处理错误
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  // ajax请求接口
  componentDidMount() {
    this.getData()
  }

  // 添加待办事项列表
  addTodo = todoTitle => {
    // console.log(todoTitle)
    this.setState({
      // 1、不能直接使用push添加数据，因为push返回的是数组的长度
      // todos: this.state.todos.push({
      //   id: Math.random(),
      //   title: todoTitle,
      //   completed: false
      // })
      //2、使用这种方式添加新数据
      // todos: this.state.todos.concat({
      //   id: Math.random(),
      //   title: todoTitle,
      //   completed: false
      // })
    })

    // 如果想使用push 可以换一种方式
    const todoNews = [...this.state.todos]
    todoNews.push({
      id: Math.random(),
      title: todoTitle,
      completed: false
    })
    this.setState({
      todos: todoNews
    })
  }

  // 修改完成状态
  onCompletedChange = id => {
    // console.log('onCompletedChange', id)
    this.setState(prevProps => {
      return {
        todos: prevProps.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    })
  }
  render() {
    return (
      <Fragment>
        <Count></Count>
        {/* 使用createContext */}
        <h1>使用createContext：</h1>
        <CounterProvider>
          <CountCopy></CountCopy>
        </CounterProvider>
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
        <TodoHeader title={this.state.title} x="1" y="2" n={2} m={3}>
          {this.state.desc}
        </TodoHeader>
        <TodoInput btnText="ADD" todo={this.addTodo} />

        {/* 条件渲染  */}
        {this.state.isLoading ? (
          <div>loading...</div>
        ) : (
          <TodoList
            todos={this.state.todos}
            onCompletedChange={this.onCompletedChange}
          />
        )}
        <h1>组件</h1>
        <Like></Like>
      </Fragment>
    )
  }
}
