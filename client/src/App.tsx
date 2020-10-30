import React, { useState, ChangeEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import FormTextInput from "./Components/FormTextInput/FormTextInput"
import './App.scss';
import './assets/styles/_display.scss'
import './assets/styles/_colors.scss'
import { getAllCars } from './redux/actions/actions';
import LandingPage from './Pages/LandingPage/LandingPage';
import GettingStarted from './Pages/GettingStarted/GettingStarted.page';
import Card from './Components/Card/Card';

const App = (props: any) => {
  const [name, setName] = useState("")

  useEffect(() => {
    props.getAllCars()
  }, [])

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <Router>
      <div className='u-flex--centered-column'>
        <Card className='page'>
          <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route path='/getting-started' component={GettingStarted}></Route>
          </Switch>
        </Card>
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