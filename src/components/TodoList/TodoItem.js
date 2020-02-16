import React, { Component } from 'react'

export default class TodoItem extends Component {
  handleChecked = () => {
    // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
    // 简写 同上
    const {
      // 设置一个空函数的默认值
      onCompletedChange = () => {},
      id
    } = this.props
    onCompletedChange(id)
  }
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.isCompleted}
          onChange={this.handleChecked}
        />
        {this.props.assignee} {this.props.title}：
        {this.props.isCompleted ? '已完成' : '未完成'}
      </li>
    )
  }
}
