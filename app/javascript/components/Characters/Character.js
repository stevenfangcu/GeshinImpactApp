import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import styled from 'styled-components'

const Char = styled.div`
  border: 1px solid #efefef;
  background: fff#;
  text-align: center;
`
const CharLogo = styled.div`
  width: 50px;
  text-align: center;
  margin-left:auto;
  margin-right:auto;
  padding: 10px;
  img{
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }`

const CharName = styled.div`
  padding: 20px 0 10px 0;
  `

const LinkWrapper = styled.div
`
  margin: 30px 0 20px 0;
  height: 50px;

  a{
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`
// main page - character population
const Character = (props) => {
  return (
    <Char key={props.attributes.name}>
      <CharLogo>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </CharLogo>
      <CharName>{props.attributes.name}</CharName>
      <LinkWrapper>
        <Link to={`/Characters/${props.attributes.slug}`}>View Character</Link>
      </LinkWrapper>
    </Char>
  )
}

export default Character
