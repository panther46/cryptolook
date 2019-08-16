import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import image from './assets/currencies-main.png';
import Form from './Components/Form';
import Spinner from './Components/Spinner';

function App() {

  // Estados Principales de APP
  const [mainCurrency, setMainCurrency] = useState('');
  const [mainCriptoCurrency, setMainCriptoCurrency] = useState('');
  // Estado de Spinner
  const [loading, setLoading] = useState(false);
  //Estado de Resultado
  const [resultado, setResultado] = useState({});

  // Component didmount
  useEffect(()=>{
    const cotizarCriptoMoneda = async () => {
      // validacion temprana para evitar ejecucion de la llamada
      if (mainCurrency === '') return;
      
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${mainCriptoCurrency}&tsyms=${mainCurrency}`

      // uso de axios para apirequest
      const resultado = await axios.get(url);
      // mostrando Spinner
      setLoading(true);

      //Time out para finalizar carga de spinner y agregar resultado que viene por objeto de variable resultado. En este caso el objeto de la API es dinamico, se accede a el con la sintaxis a continuacion en orden.
      setTimeout(() =>{
        setLoading(false);
        setResultado(resultado.data.DISPLAY[mainCriptoCurrency][mainCurrency]);
      },2000);
    }

    cotizarCriptoMoneda();

  }, [mainCurrency, mainCriptoCurrency]);

  // Logica para renderizar el spinner, si el estado loading es true ocurre el render.
 const loadingComponent = (loading) ? <Spinner/>:null;


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
            {loadingComponent}
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
