import React, {Fragment} from 'react'
import styled from 'styled-components'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'
import Gray from './Stars/Gray'


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
    const RatingLabel = styled.div`
`
  const RatingTitle = styled.div``

  const ratingOptions = rating.map( (score, index) => {
    return(
      <Fragment>
        <input type="radio" value={score} name="Rating" onClick={()=>bindSelected(this,score)} onChange={()=>console.log("selected",score)} id={`rating-${score}`}></input>
        <label></label>
      </Fragment>
    )
  })
  function bindSelected(this1,score) {
    props.setRating(score,this);
  }
  return (
    <div className="Wrapper" style={{ color: 'white' }}>
    <form onSubmit={props.handleSubmit}>
      <div>Have a guide for {props.attributes.name}? Share your Guide :)</div>

      <div className="field">
        <input onChange={props.handleChange} value={props.guide.title} type="text" name="title" placeholder="guide name"/>
      </div>

      <div className="field">
        <input type="text" onChange={props.handleChange} value={props.guide.description} name="description" placeholder="guide description"/>
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


    <button type="sumbit">Submit</button>

    </form>
    </div>
  )
}
export default GuidesForm
