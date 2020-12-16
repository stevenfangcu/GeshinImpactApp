import React from 'react'
import styled from 'styled-components'

const Guide = (props) => {
  const {score, title, description} = props.attributes
  return (
    <div className="card">
      <div className="Rating">
        <div className="score">{score}</div>
      </div>
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
    </div>
  )
}

export default Guide
