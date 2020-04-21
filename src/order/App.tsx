import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from 'philosophyship'

function App() {
  return (
    <div className="App">
        <Button
            btnType="primary"
            onClick={()=> {alert(1)}}
        >
            我做的按钮2
        </Button>
    </div>
  );
}

export default App;
