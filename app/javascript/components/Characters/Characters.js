import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Character from './Character'
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left:auto;
  margin-right:auto;
`
const Header = styled.div`
padding: 100px 100px 10px 100px;
h1{
  font-size: 42px;
}`
const Subheader = styled.div`
  font-weight:300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Characters = () =>{
  const [characters, setCharacters] = useState([]);

  useEffect(()=> {
    //get all characters
    //update characters in the state
    //fetch('/api/v1/characters.json')

    fetch('/api/v1/characters.json')
    .then( response => response.json())
    .then( data =>{
      console.log(data);
      console.log(data.data);
      setCharacters(data.data);
    })
  }, [characters.length])

  const grid = characters.map( item =>{
    return (
      <Character
      key={item.attributes.name}
      attributes={item.attributes}
      />
    )
  })


  return (
    <Home>
      <Header>
        <h1>GeshinGoonies</h1>
        <Subheader>Geshin Impact Guides and damage calculators</Subheader>
      </Header>

      <Grid>
        Characters index
        <ul>{grid}</ul>
      </Grid>
    </Home>
  )
}
export default Characters
