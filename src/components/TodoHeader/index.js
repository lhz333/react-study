import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.children}</p>
      <p>{props.x + props.y}</p>
      <p>{props.m + props.n}</p>
    </div>
  )
}

TodoHeader.propTypes ={
  title: PropTypes.string.isRequired,
  x: PropTypes.string.isRequired
}

TodoHeader.defaultProps = {
  title: '默认值'
}
