import React from 'react';
import './App.css';
import image from './assets/currencies-main.png';
import Form from './Components/Form';

function App() {
  return(
    <div className = "wrapper">
      <div className = "container">
        <div className = "row">
          <div className = "col-6">
            <img src = {image} alt = "main" className = "nameImage img-fluid" />
            
          </div>
          <div className = "col-6">
            <h1>Quotes Cryptocurrencies Now</h1>
            <Form/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
