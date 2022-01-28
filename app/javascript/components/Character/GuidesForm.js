import React, {Fragment} from 'react'
import styled from 'styled-components'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'
import Gray from './Stars/Gray'
import './Guides.css'
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';


const GuidesForm = (props) => {
  const rating = [5,4,3,2,1];

  const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 45px 0 15px 0;
  background: #000000;
  `

  const RatingBox = styled.div`
    background: #000000;
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
    
    const RatingLabel = styled.div``
  const RatingTitle = styled.div``

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `

  const ratingOptions = rating.map( (score, index) => {
    return(
      <Fragment>
        <input type="radio" value={score} name="Rating" checked={props.guide.score == score} onChange={()=>console.log("selected",score)} id={`rating-${score}`}></input>
        <label onClick={props.setRating.bind(this,score)}></label>
      </Fragment>
    )
  })

  return (
    <div className="Wrapper" style={{ color: 'white' }}>
    <form onSubmit={props.handleSubmit}>
      <div>Have a guide for {props.attributes.name}? Share your Guide :)</div>

      <div>
        <input className="inputText" onChange={props.handleChange} value={props.guide.title} type="text" name="title" placeholder="guide name" />
      </div>

      <div className="field">
        <textarea className="inputTextPara" onChange={props.handleChange} value={props.guide.description} name="description" placeholder="guide description"/>
      </div>

      <div className="field">
        <RatingContainer>
          <div className="rating-text">
            Rate this character
            <br></br>
          </div>
          <RatingBox>
            {ratingOptions}
          </RatingBox>

        </RatingContainer>
      </div>
    <ButtonContainer>
     <Button>Submit Guide</Button>
    </ButtonContainer>

    </form>
    </div>
  )
}
export default GuidesForm
