import React, { Component } from 'react'

export default class Like extends Component {
  constructor() {
    super()
    this.state = {
      isLike: true
    }
  }
  handleLikeClick = () => {
    // 使用这种方式修改数据，在react里是不允许的，能修改数据，但是界面不会渲染
    // this.state.isLike = !this.state.isLike

    // 要修改数据要使用setState方法，setState方法可以有两个参数
    // setState是异步的
    // 第一个参数又有两种情况，第一种情况是一个对象
    // this.setState({
    //   isLike: !this.state.isLike
    // })
    // 第二种情况是一个方法
    this.setState(
      prevState => {
        // console.log(prevState)
        console.log('setState内部的this.state.isLike:', this.state.isLike)
        return {
          isLike: !prevState.isLike
        }
      },
      () => {
        // 由于setState是异步的，如果想要获取到最新的state，应该在这个回调里来获取
        console.log('最新的值：', this.state.isLike)
      }
    )
    console.log('setState外部的this.state.isLike:', this.state.isLike)
  }
  render() {
    return (
      <div>
        <span onClick={this.handleLikeClick}>
          {this.state.isLike ? '喜欢♥️' : '不喜欢🖤'}
        </span>
      </div>
    )
  }
}
