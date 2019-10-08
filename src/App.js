import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet firstName="Clifford" lastName="Louis">
        <p> This is the basic of your personal info. </p>
      </Greet>
      <Greet firstName="Jefferson" lastName="Pierre">
        <button>
          Action
        </button>
      </Greet>
      <Greet firstName="Jeff" lastName="Louis"/>
      
      <Welcome firstName="Clifford" lastName="Louis" />
      <Welcome  firstName="Jefferson" lastName="Pierre" />
      <Welcome firstName="Jefferson" lastName="Pierre" />
    </div>
  );
} 

export default App;
