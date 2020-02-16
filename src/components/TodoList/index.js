import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired
      })
    ).isRequired,
    onCompletedChange: PropTypes.func
  }
  render() {
    // console.log(this.props.todos)
    return (
      <ul className="abc">
        {this.props.todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onCompletedChange={this.props.onCompletedChange}
            />
            // <TodoItem
            //   key={todo.id}
            //   id={todo.id}
            //   title={todo.title}
            //   isCompleted={todo.isCompleted}
            // />
          )
        })}
      </ul>
    )
  }
}
