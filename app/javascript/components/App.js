import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Characters from './Characters/Characters'
import Character from './Character/Character'

const App = () => {
  return(
    <Switch>
      <Route exact path="/" component={Characters}/>
      <Route exact path="/characters/:slug" component={Character}/>
    </Switch>
  )
}
export default App
