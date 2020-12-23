import React, {Fragment} from 'react'
import styled from 'styled-components'
import Selected from './Stars/Selected'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'


const starArray = [1,2,3,4,5];
var selectedCounter = 0;
var notSelectedCounter = 0;
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
const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input{
    display:none;
  }

  label{
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;

  }
  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label{
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }`
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
  selectedCounter++;
  console.log("testing: " + selectedCounter);

  return(
    <Fragment>
      <input type="radio"></input>
      <label></label>
    </Fragment>
  )
})

const subStars =  starArray.map((score, index) => {
  return(
    <Fragment>
      <input type="radio"></input>
      <label></label>
    </Fragment>
  )
})

const grayStars = (score) => {
  console.log(score);
  var grayArray = [];
  for(var i = 0; i < score; i++){
    grayArray.push(".");
  }
  const spawnStars = grayArray.map((score, index) => {
    return(
      <Fragment>
        <input type="radio"></input>
        <label></label>
      </Fragment>
    )
  })
}

const Guide = (props) => {
  const {score, title, description} = props.attributes
  return (
    <Card>
      <div className="Rating">
        <RatingBox>
          {grayStars(score)}
        </RatingBox>
        {score}
      </div>
      <div className="title">{title}</div>

    </Card>
  )
}

export default Guide
