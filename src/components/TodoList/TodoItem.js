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

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.completed !== this.props.completed
  }

  render() {
    console.log(`TodoItem ${this.props.title} render`)
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={this.handleChecked}
        />
        {this.props.title}：{this.props.completed ? '已完成' : '未完成'}
      </li>
    )
  }
}

// 可以使用PrueComponent解决改变数据渲染多次的问题

// import React, { PureComponent } from 'react'

// export default class TodoItem extends PureComponent {
//   handleChecked = () => {
//     // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
//     // 简写 同上
//     const {
//       // 设置一个空函数的默认值
//       onCompletedChange = () => {},
//       id
//     } = this.props
//     onCompletedChange(id)
//   }

//   render() {
//     console.log(`TodoItem ${this.props.title} render`)
//     return (
//       <li>
//         <input
//           type="checkbox"
//           checked={this.props.completed}
//           onChange={this.handleChecked}
//         />
//         {this.props.title}：{this.props.completed ? '已完成' : '未完成'}
//       </li>
//     )
//   }
// }
