import React, { Component } from 'react'
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
  render() {
    return (
      <div>
        <input type="text" />
        <button>{this.props.btnText}</button>
      </div>
    )
  }
}
