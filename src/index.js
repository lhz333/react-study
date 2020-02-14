import React from 'react'
import ReactDom from 'react-dom'

// 这种方式可以理解为创建了一个简单的react元素
// const app = <h1>hello react!!</h1>
// const createApp = props => {
//   return (
//     <div>
//       {/* 只要在jsx中输入js代码就在外层加入一层花括号，注释也是js，所以这里也加入了一层花括号 */}
//       <h1>hello {props.title}!</h1>
//       <p>React 是一个用于构建用户界面的 JavaScript 库</p>
//     </div>
//   )
// }

// const app = createApp({
//   title: 'react world '
// })

//创建组件的第一种方式，就是使用箭头函数，组件名要大写
const App = props => {
  return (
    <div>
      {/* 只要在jsx中输入js代码就在外层加入一层花括号，注释也是js，所以这里也加入了一层花括号 */}
      <h1 title={props.title}>hello {props.title}!</h1>
      <p>React 是一个用于构建用户界面的 JavaScript 库</p>
    </div>
  )
}

ReactDom.render(<App title="react"/>, document.querySelector('#root'))
