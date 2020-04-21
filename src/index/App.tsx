import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from 'philosophyship'
import 'philosophyship/dist/index.css'

function App() {
  return (
    <div className="App">
        <Button
            btnType="primary"
            onClick={()=> {alert(1)}}
        >
            我做的按钮1
        </Button>
    </div>
  );
}

export default App;
