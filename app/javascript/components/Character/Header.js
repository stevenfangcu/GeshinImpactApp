import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 30px;
  img{
    height: 100px;
    width: 100px;
    border-radius: 100%;
    border: 1px solid rbga(0,0,0,0.1);
    margin-bottom: -8px;
  }
`
const TotalGuides = styled.div`
  font-size: 18px;
  padding-left: 10px 0;
`

const Header = (props) => {
  const {name, image_url} = props.attributes
  const total = props.guides.length
  var score = 0;
  console.log(props.guides[0].attributes.score);
  for(var i = 0; i < total; i++){
    if(props.guides[i].attributes.score == null){
      score += 0;
    }else if(props.guides[i].attributes.score == undefined){
      score += 0;
    }else{
      score += parseFloat(props.guides[i].attributes.score);
    }
  }
  const userRating = (score / total).toFixed(2);
  return (
    <Wrapper>
      <h1>
        <img src={image_url} alt={name}/> {name} </h1>
        <div>
          <TotalGuides>{total} User Guides</TotalGuides>
          <TotalGuides>{userRating} rating </TotalGuides>
        </div>
    </Wrapper>
  )
}

export default Header
