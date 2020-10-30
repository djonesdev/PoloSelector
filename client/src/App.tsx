import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss';
import './assets/styles/_display.scss'
import './assets/styles/_colors.scss'
import { getAllCars } from './redux/actions/actions';
import LandingPage from './Pages/LandingPage/LandingPage';
import QuestionFlow from './Pages/QuestionFlow/QuestionFlow.page';
import NoPageFound from './Pages/NoPageFound/NoPageFound'
import Card from './Components/Card/Card';

const App = (props: any) => {

  useEffect(() => {
    props.getAllCars()
  }, [])

  return (
    <Router>
      <div className='u-flex--centered-column'>
        <Card className='page'>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/questions' component={QuestionFlow} />
            <Route component={NoPageFound} />
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