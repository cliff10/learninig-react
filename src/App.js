import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBiding from './components/EventBiding';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      {/* <Greet firstName="Clifford" lastName="Louis">
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
      <Welcome firstName="Jefferson" lastName="Pierre" /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greet firstName="Jefferson" lastName="Pierre"></Greet> */}
    {/* <Welcome  firstName="Jefferson" lastName="Pierre" /> */}
    {/* <FunctionClick /> */}
    {/* <ClassClick /> */}
    {/* <EventBiding /> */}
    {/* <ParentComponent /> */}
    {/* <UserGreeting /> */}
    <NameList />
    </div>
  );
} 

export default App;
