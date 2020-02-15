import React, { Component } from 'react'
import { render } from 'react-dom'

// JSX原理 表示一个虚拟dom树的方式
// const appVDom = {
//   tag: 'div',
//   attrs: {
//     className: 'app',
//     id: 'appRoot'
//   },
//   children: [
//     {
//       tag: 'h1',
//       attrs: {
//         className: 'title'
//       },
//       children: ['JSX原理']
//     },
//     {
//       tag: 'p',
//       attrs: null,
//       children: ['类组件是继承React.Component的']
//     }
//   ]
// }

// 这里是使用类的形式创建的组件，这是jsx的语法，但不是合法的js
// class App extends Component {
//   render() {
//     return (
//       <div className="app" id="appRoot">
//         <h1 className="title">JSX原理</h1>
//         <p>类组件是继承React.Component的</p>
//       </div>
//     )
//   }
// }

// 所以react在真正渲染的时候会把上面的代码编译成下面这种形式来运行，下面的是合法的js
class App extends Component {
  render() {
    // React.createElement是一个方法，用于创建元素，可以有很多的参数，但是前两个是固定的
    // 第一个是标签名
    // 第二个是标签的属性
    // 剩下的就是更多的子元素
    // React.createElement(type, [props], [...children])
    return React.createElement(
      'div',
      {
        className: 'app',
        id: 'appRoot'
      },
      React.createElement(
        'h1',
        {
          className: 'title'
        },
        'JSX原理'
      ),
      React.createElement('p', null, '类组件是继承React.Component的')
    )
  }
}

render(<App />, document.querySelector('#root'))
