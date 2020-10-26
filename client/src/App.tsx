import React, { useState, ChangeEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FormTextInput from "./Components/FormTextInput/FormTextInput"
import './App.scss';
import './assets/styles/_display.scss'
import './assets/styles/_colors.scss'
import { getAllCars } from './redux/actions/actions';
import LandingPage from './Pages/LandingPage/LandingPage';
import GettingStarted from './Pages/GettingStarted/GettingStarted.page';

const App = (props: any) => {
  const [name, setName] = useState("")

  useEffect(() => {
    props.getAllCars()
  }, [])

  const sendAction = (event: any) => {
    console.log('button pressed')
  }
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  
  console.log(props)

  return (
   <Router>
     <div>
       <Switch>
         <Route exact path='/' component={LandingPage}></Route>
         <Route path='/getting-started' component={GettingStarted}></Route>
       </Switch>
     </div>
   </Router>
  );
}

const mapStateToProps = (state: any) => ({
  cars: state.cars
 })

 const mapDispatchToProps = (dispatch: any) => ({
  getAllCars: () => dispatch(getAllCars())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);