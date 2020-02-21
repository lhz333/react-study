import React, { Component } from 'react'
import CountBtn from './CountBtn'
import Counter from './Counter'

export default class CountCopy extends Component {
  render() {
    return (
      <>
        <CountBtn type="decrement">-</CountBtn>
        <Counter></Counter>
        <CountBtn type="increment">+</CountBtn>
      </>
    )
  }
}
