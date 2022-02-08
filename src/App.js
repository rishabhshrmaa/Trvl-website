import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Services from './components/pages/Services'
import Bookings from './components/pages/Bookings'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/bookings' exact component={Bookings}/>
        <Route path='/sign-up' exact component={SignUp}/>
      </Switch>
    </Router>
    </>
  )
}

export default App
