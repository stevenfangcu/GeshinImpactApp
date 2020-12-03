import React, {Fragment} from 'react'
import styled from 'styled-components'


const GuidesForm = (props) => {
  const rating = ['S','A','B','C','D','F'];

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

    label{
      vertical-align: top;
      width: 20px;
    }
    input{
      cursor: pointer;
      width: 51px;
      height: 20px;
      display: in-block;
      text-align:center;
      vertical-align: top;
    }`
    const RatingLabel = styled.div`
      background: #000000;
      display: flex;
      justify-content: center;
      flex-direction: row-reverse;
      position: relative;

      label, input{
        cursor: pointer;
        width: 120px;
        height: 20px;
        display: in-block;
        text-align:left;
        vertical-align: top;
        margin-left: 6px;
      }`
  const RatingTitle = styled.div``

  const ratingOptions = rating.map( (score, index) => {
    return(
      <Fragment>
        <label></label>
        <input type="radio" value={score} name="Rating" onClick={props.setRating.bind(this,score)} onChange={()=>console.log('selected',score,this)} id={`rating-${score}`}></input>
      </Fragment>
    )
  })
//{()=>{ {props.setRating.bind(this,score)}; console.log(props.setRating.bind(this,score))}}
  const ratingLabels = rating.map( (score, index) => {
    return(
      <Fragment>
        <label>{score}</label>
      </Fragment>
    )
  })

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
          <RatingLabel>
            {ratingLabels}
          </RatingLabel>
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
