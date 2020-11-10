import React, {useState, useEffect} from 'react'
import Header from './Header'

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
  return (
    <div className="wrapper">
      <div className="column">
        {loaded &&
          <Header
            attributes={character.data.attributes}
            guides={character.included}
          />
        }
        <div className="guides"></div>
      </div>
      <div className="column">
        <div className="guide-form">[Guide Form Goes here]</div>
      </div>

    </div>)
}
export default Character
