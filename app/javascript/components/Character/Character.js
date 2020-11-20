import React, {useState, useEffect, Fragment} from 'react'
import Header from './Header'
import styled from 'styled-components'
import GuidesForm from './GuidesForm'
import axios from 'axios'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child{
    background: #000;
  }
`
const Main = styled.div`
  left-padding: 5%;
`

const Character = (props) =>{
  const [character, setCharacter] = useState({})
  const [guide, setGuide] = useState({})
  const [loaded, setLoaded] = useState(false)



  useEffect(()=>{
    const slug = props.match.params.slug
    const url = `/api/v1/characters/${slug}`
    console.log(props)
    //api/v1/character/Klee
    // Characters/klee
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharacter(data)
      console.log(data);
      setLoaded(true)
    })
  }, [])

  const handleChange = (e) =>{
    e.preventDefault()

    console.log('name:', e.target.name, 'value', e.target.value)

    setGuide(Object.assign({}, guide, {[e.target.name]: e.target.value}))

    console.log('guide:', guide)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //const csrfToken = document.querySelector('[name=csrf-token]'.content)
    const csrfToken = document.querySelector('[name=csrf-token]').content
    const character_id = character.data.id
    console.log(JSON.stringify({guide}))

    /*
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post('/api/v1/guides',{guide, character_id})
    .then(resp => {
      debugger
    })
    .catch(resp =>{})
    */

    guide.character_id = character_id
    fetch('/api/v1/guides',{
      method: 'POST',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify(guide)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const included = [...character.included, data.data.data]
      setCharacter({...character, included})
      setGuide({title: '', description: '',score: '',})
    })
    .catch(error => console.log(error));

  }

  const setRating = (score, e) => {
    e.preventDefault()

    setGuide({...guide, score})
  }

  return (
    <Wrapper>
      {loaded &&
        <Fragment>
        <Column>
          <Main>
              <Header
                attributes={character.data.attributes}
                guides={character.included}
              />
            <div className="guides"></div>
          </Main>
        </Column>
        <Column>
          <GuidesForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setRating={setRating}
            attributes={character.data.attributes}
            guide={guide}
          />
        </Column>
        </Fragment>
      }
    </Wrapper>)
}
export default Character
