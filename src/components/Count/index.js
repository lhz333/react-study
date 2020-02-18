// Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

// 两个常见的api，useState, useEffect  需要先引入
import React, { useState, useEffect } from 'react'

export default function Count() {
  // 声明一个叫 "count" 的 state 变量
  // useState是一个方法，这个方法的参数就是一个默认值。返回结果是一个数组，数组的第一个值是state，第二个相当于setState
  // 结构出来数组中的两个值
  const [count, setCount] = useState(0)

  // useEffect的参数是一个回调，不管是组件挂载还是更新，都会触发这个回调方法，类似于componentDidMount和componentDidUpdate的结合
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* 这里的setCount就是useState所生成的方法（第二个），注意和setState不一样的地方在于参数，这里的参数是一个新值即可 */}
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        -
      </button>
      {/* 这里就是useState创建的值 */}
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +
      </button>
    </div>
  )
}
