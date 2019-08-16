import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CriptomonedaList from './CriptomonedaList';


function Form() {
    // estado local relacionado con la llamada a la api
    const [criptomonedas, setCriptomonedas] = useState([]);
    // estado local relacionado con la moneda a cotizar
    const [monedaCotizar, setMonedaCotizar] = useState('');
    // estado local relacionado con la cripto moneda a consultar
    const [criptoCotizar, setCriptoCotizar] = useState('');
    // estado local relacionado a validacion de errores
    const [error, setError] = useState(false);

    // useEffect para llamar a la api
    useEffect (() =>{
        const consultarApi = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);

            console.log(resultado.data.Data);
             // guardando resultado en estate.
            setCriptomonedas(resultado.data.Data);
        }
       
        consultarApi();
        
    }, []);

    const cotizarMoneda = e => {
        e.preventDefault();

        // Validacion de error, si ambos campos estan llenos
        if (monedaCotizar === '' || criptoCotizar === ''){
            setError(true);
            return;
        }

        // Pasar datos a componente principal
        setError(false);
    }



    return(
       <form onSubmit = {cotizarMoneda}>
           <div className="form-group">
            <label htmlFor="example">Choose your Currency</label>
            <select 
                    className="form-control" id="exampleFormControlSelect1"
                    onChange = {e => setMonedaCotizar(e.target.value)}
                >
                <option value = "">Currency</option>
                <option value = "USD">US Dollar</option>
                <option value = "ES">Euro</option>
                <option value = "GBP">Pounds</option>
            </select>
             <small id="emailHelp" className="form-text text-muted">Escoge la moneda que quieres consultar</small>
            </div>
            <div className="form-group">
            <label htmlFor="">CryptoCurrency</label>
             <select 
                className="form-control" id=""
                onChange = {e => setCriptoCotizar(e.target.value)}
             >
             <option value = "">CryptoCurrency</option>
             
                 {criptomonedas.map(criptomonedas => (
                     <CriptomonedaList
                     key = {criptomonedas.CoinInfo.Id}
                     criptomonedas = {criptomonedas}
                     />
                 ))};

             </select>
             <small id="currencyHelp" className="form-text text-muted">Escoge la Cripto moneda</small>
            </div>
            <input type = "submit" className = "btn btn-primary btn-lg btn-block" value="Calcular"></input>
            
       </form>

    )
};

export default Form;