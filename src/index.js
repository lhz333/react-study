import React, { Component } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'

import './index.css'

const Title = styled.p`
 color: gray;
`

class App extends Component {
  render() {
    const style = {color: 'red'}
    return (
      <div>
        <h1>元素中的样式</h1>
        <ul>
          <li style={style}>使用style内联创建</li>
          <li className="has-text">使用class的方式，但是在react中class要写成className</li>
          <li className={classNames('a',{'b': true, 'c': false})}>要动态添加不同的className就可以使用第三方的包叫classnames，比如这个li标签上就只有a b 没有c</li>
          <li><Title>styled-components的使用</Title></li>
        </ul>
      </div>
    )
  }
}

render(<App />, document.querySelector('#root'))
