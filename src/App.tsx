import React, { useState, ChangeEvent } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import FormTextInput from "./Components/FormTextInput/FormTextInput"
import './App.css';
import { simpleAction } from './redux/actions/actions';

const App = (props: any) => {
  const [name, setName] = useState("")

  const sendAction = (event: any) => {
    props.simpleAction();
  }
  
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
   console.log(props )
  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <FormTextInput value={name} onChange={handleNameChange} placeholder="Enter Name" label="Name"></FormTextInput>
    <button onClick={sendAction}>Test redux action</button>
    <pre>
 {
  JSON.stringify(props)
 }
</pre>
    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
   </div>
  );
}

const mapStateToProps = (state: any) => ({
  cars: state
 })

 const mapDispatchToProps = (dispatch: any) => ({
  simpleAction: () => dispatch(simpleAction())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);