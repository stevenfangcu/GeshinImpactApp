import React, {Fragment} from 'react'
import styled from 'styled-components'
import Selected from './Stars/Selected'
import Gray from './Stars/Gray'


const starArray = [1,2,3,4,5];
const Card = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  padding: 20px;
  margin: 0 20px 20px 0;
  label{
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }
  .notSelected{
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
  }
`


/*
  const subStars = starArray.map( (score1, index) => {
    for(var i = 0; i < score1; i++){

    }
  })
  return (
    <div> {subStars} </div>
  )
*/
const spawnStars = starArray.map( (score, index) => {
  return(
    <Fragment>
      <input type="radio"></input>
      <label></label>
    </Fragment>
  )
})

const Guide = (props) => {
  const {score, title, description} = props.attributes
  return (
    <Card>
      <div className="Rating">
        <div className="score">
          {score}
          {spawnStars}
        </div>
      </div>
      <div className="title">{title}</div>

    </Card>
  )
}

export default Guide
