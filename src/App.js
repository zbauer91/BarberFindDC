import React, { Component } from 'react'
import {
  Link,
  Route
} from 'react-router-dom'

import './App.css'
import About from './About'
import Barbers from './Barbers'
import Home from './Home'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='Nav'>
          <Link to='/Home'>Home</Link>
          <Link to='/Barbers'>Barbers</Link>
          <Link to='/About'>About</Link>
        </div>

        <div className='body'>
          <Route path='/Home' component={Home} />
          <Route path='/Barbers' component={Barbers} />
          <Route path='/About' component={About} />
        </div>
      </div>
    )
  }
}

export default App
