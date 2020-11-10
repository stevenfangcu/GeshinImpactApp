import React from 'react'

const Header = (props) => {
  const {name, image_url} = props.attributes
  const total = props.guides.length

  return (
    <div className="wrapper">
      <h1>
        <img src={image_url} alt={name} /> {name} </h1>
        <div>
          <div className="totalGuides">{total} User Guides</div>
        </div>
    </div>
  )
}

export default Header
