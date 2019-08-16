import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import image from './assets/currencies-main.png';
import Form from './Components/Form';

function App() {

  // Estados Principales de APP

  const [mainCurrency, setMainCurrency] = useState('');
  const [mainCriptoCurrency, setMainCriptoCurrency] = useState('');

  // Component didmount
  useEffect(()=>{
    const cotizarCriptoMoneda = async () => {
      
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${mainCriptoCurrency}&tsyms=${mainCurrency}`

      // uso de axios para apirequest
      const resultado = await axios.get(url);
      console.log(resultado);
    }

    cotizarCriptoMoneda();

  }, [mainCurrency, mainCriptoCurrency]);


  return(
    <div className = "wrapper">
      <div className = "container">
        <div className = "row">
          <div className = "col-6">
            <img src = {image} alt = "main" className = "nameImage img-fluid" />
            
          </div>
          <div className = "col-6">
            <h1>Quotes Cryptocurrencies Now</h1>
            <Form
            setMainCurrency = {setMainCurrency}
            setMainCriptoCurrency = {setMainCriptoCurrency}
            
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
