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
const spawnStars = ((score1) => {
  console.log(score1);
  var counter = 0;
  var starFragment = document.createDocumentFragment();
  var starDiv = document.createElement('div');
  for(var i = 0; i < score1; i++){
    if(counter < score){
      counter++;
      starFragment.appendChild();
    }
  }

})

const Guide = (props) => {
  const {score, title, description} = props.attributes
  return (
    <Card>
      <div className="Rating">
        <div className="score">
          {score}
          {spawnStars({score})}
        </div>
      </div>
      <div className="title">{title}</div>

    </Card>
  )
}

export default Guide
