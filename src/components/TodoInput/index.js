// react里面通过ref来获取组件或dom元素，要使用ref之前必须先调用React.createRef方法来创建一个ref
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  // 校验字段类型
  static propTypes = {
    btnText: PropTypes.string
  }
  // 默认值
  static defaultProps = {
    btnText: '添加'
  }
  // 构造函数只执行一次
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
    // 在constructor里面创建ref
    this.inputDom = createRef()
  }

  // 改变input值
  handleInputChange = e => {
    this.setState({
      inputValue: e.currentTarget.value
    })
  }
  // 2、不使用箭头函数时，需要bind(this)
  // handleAddClick(value) {
  //   console.log(this.state, value)
  // }

  handleAddKeyUp = (e) =>{
    if(e.keyCode === 13) {
      this.handleAddClick()
    }
  }

  // 3、父子组件传参
  handleAddClick = () => {
    if (!this.state.inputValue) return
    this.props.todo(this.state.inputValue)
    this.setState({
      inputValue: ''
    }, ()=>{
      this.inputDom.current.focus()
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleAddKeyUp}
          ref={this.inputDom}
        />
        {/* 1、事件的第一种写法，这时是一个匿名函数，并且写在了render渲染中，这样每次渲染就会生成一个匿名函数，这时我们就会把方法提到外面去 */}
        {/* <button
          onClick={() => {
            console.log(this.state)
          }}
        >
          {this.props.btnText}
        </button> */}

        {/* 2、使用bind(this, value)传参 */}
        {/* <button onClick={this.handleAddClick.bind(this, '参数')}>{this.props.btnText}</button> */}

        {/* 3 */}
        <button onClick={this.handleAddClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
