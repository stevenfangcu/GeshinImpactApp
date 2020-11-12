import React from 'react'

const GuidesForm = (props) => {
  return (
    <div className="Wrapper">
    <form onSubmit={props.handleSubmit}>
      <div>Have a guide for {props.attributes.name}? Share your Guide :)</div>

      <div className="field">
        <input onChange={props.handleChange} value={props.guide.title} type="text" name="title" placeholder="guide name"/>
      </div>

      <div className="field">
        <input type="text" onChange={props.handleChange} value={props.guide.description} name="description" placeholder="guide description"/>
      </div>

      <div className="field">
        <div className="rating-container">
          <div className="rating-text">
            Rate this character
          </div>
          [Star/Alphabet rating]
        </div>
      </div>


    <button type="sumbit">Submit</button>

    </form>
    </div>
  )
}
export default GuidesForm
