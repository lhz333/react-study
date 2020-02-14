import React from 'react'
import { render } from 'react-dom'

// 定义组件的第二种方法，使用类继承React.Component
class App extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.title}!!</h1>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

// 类组件渲染的原理
// const app = new App ({
//   desc: "类组件是继承React.Component的",
//   title: "类组件！"
// }).render()

// render是react dom提供的一个方法，这个方法通常只会用一次
render (
  <App desc="类组件是继承React.Component的" title="类组件！"/>,
  document.querySelector('#root')
)

// 在React16之前，使用以下方式来创建类
// React.createClass({
//   render(){
//     return <h1>xxx</h1>
//   }
// })