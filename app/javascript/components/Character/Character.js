import React, {useState, useEffect, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import styled from 'styled-components'
import GuidesForm from './GuidesForm'
import Guide from './Guide'
import { Alert, Modal, ToastHeader } from 'react-bootstrap'
import { Toast,ToastBody } from 'react-bootstrap'

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
  `
const ColumnGuides = styled.div`
background: #000;
height: 100vh;
overflow: scroll;
`

const Main = styled.div`
  left-padding: 5%;
`
const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContainerTopCenter = styled.div`
  position: absolute;
  top: 0;
  left: 0; 
  width: 100vw;
  heigh: 15vh;
  display: flex;
  align-items: baseline;
  justify-content: center;
`   

const ModalContainerBottomRight = styled.div`
  position: absolute;
  bottom: 14%;
  right: 0;
  width: 20vw;
  height: 1vh;
  align-items: flex-end;
`

const ErrorParagraph = styled.p`
  text-align: center;
  width: 20%;
  height: 15%;
  background: white;
  button{
    background-color: #e7e7e7;
    color: black;
    border-radius: 12px;
    border: 2px solid #555555;
  }
  button:hover{
    background-color: #4CAF50;
    color: white;
  }
`

const Character = (props) =>{
  const [character, setCharacter] = useState({})
  const [guide, setGuide] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [errorMessage, setErrorMessage] = useState({message: "", state: false})
  const [errorPopupMessage, setErrorPopupMessage] = useState({message: "", state: false})
  const [errorToastMessage, setErrorToastMessage] = useState({message: "", state: false})

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
      console.log(data)
      setLoaded(true)
    })
  }, [])

  const handleChange = (e) =>{
    e.preventDefault()
    
    console.log('name:', e.target.name, 'value', e.target.value, ' length', e.target.value.length)

    setGuide(Object.assign({}, guide, {[e.target.name]: e.target.value}))

    console.log(guide)
  }

  const renderErrorModal = () =>{
    //Custom popup alert
    if (errorMessage.state){
      return (
        <div>
          {errorMessage.state ? (
            <ModalContainer>
              <ErrorParagraph>
                {errorMessage.message}
                <br></br>
                <button onClick={() => setErrorMessage({state: false})}>Close</button>
              </ErrorParagraph>
            </ModalContainer>
          ): null}
        </div>
      )
    }
    //react Alert component - bootstrap
    if(errorPopupMessage.state){
      return (
        <div>
          <ModalContainerTopCenter>
            {errorPopupMessage.state ? (
            <Alert variant='danger' transition onClose={() => setErrorPopupMessage({state:false})} dismissible>
              <Alert.Heading>Oh Snap! You got an Error!</Alert.Heading>
              <p>{errorPopupMessage.message}</p>
            </Alert>
            ): null}
          </ModalContainerTopCenter>
        </div>
      )
    }
    //react Toast component - bootstrap 
    if(errorToastMessage.state){
      return(
      <div>
        <ModalContainerBottomRight>
          {errorToastMessage.state ? (
            <Toast bg='danger' onClose={() => setErrorToastMessage({state:false})} animation={true} position='top-center' delay={30000000} autohide>
              <ToastHeader>
                <strong>
                Error! 
                </strong>
              </ToastHeader>
              <ToastBody>
                <p>
                  {errorToastMessage.message}
                </p>
              </ToastBody>
            </Toast>
          ): null}
          </ModalContainerBottomRight>
      </div>
      )
    }
  }


  const handleClose = () =>{
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //const csrfToken = document.querySelector('[name=csrf-token]'.content)
    const csrfToken = document.querySelector('[name=csrf-token]').content
    const character_id = character.data.id
      /*
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

      axios.post('/api/v1/guides',{guide, character_id})
      .then(resp => {
        debugger
      })
      .catch(resp =>{})
      */

      if(!guide.title || String(guide.title).length < 5){
        // setErrorMessage('Title is too short (min 5 chars)')
        setErrorMessage(Object.assign({}, errorMessage, {message: "Title is too short", state: true}))
        console.log(errorMessage)
      }else if(!guide.description || String(guide.description).length < 5){
        // setErrorMessage('Description is too short (min 5 chars)')
        setErrorPopupMessage(Object.assign({}, errorPopupMessage, {message: "Description is too short", state: true}))
        console.log(errorPopupMessage)
      }else if(!guide.score){
        setErrorToastMessage(Object.assign({}, errorToastMessage, {message: "Score is not selected", state: true}))
        console.log("Score error")
        console.log(errorToastMessage)
      }else{
      /*
        fetching the api data from the database
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
          console.log(included)
          setCharacter({...character, included})
          setGuide({title: '', description: '',score: '',})
          setErrorMessage({message: '', state: false})
        })
      .catch(error => console.log(error))
      window.location.reload(false)
      }
  }
  const setRating = (score, e) => {
    e.preventDefault()

    setGuide({...guide, score})

    console.log(guide)
  }

  let guides
  if (loaded && character.included){
    guides = character.included.map( (item,index) => {
      console.log("mapping: ", item)
      return(
        <Guide
          key={index}
          attributes={item.attributes}
          />
      )
    })
  }

  const errorState = () => {
    console.log("State: " + errorMessage.state)
    return errorMessage.state;
  } 
// left side of guides (showing all guides in database)
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
              {guides}
            </Main>
          </Column>
          <ColumnGuides>
            <GuidesForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={character.data.attributes}
              guide={guide}
            />
          </ColumnGuides>
          {renderErrorModal()}
        </Fragment>
      }
    </Wrapper>)
}
export default Character
