import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CriptomonedaList from './CriptomonedaList';


function Form() {

    const [criptomonedas, setCriptomonedas] = useState([]);

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


    return(
       <form>
           <div className="form-group">
            <label htmlFor="example">Choose your Currency</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option value = "">Choose your Currency</option>
                <option value = "USD">US Dollar</option>
                <option value = "ES">Euro</option>
                <option value = "GBP">Pounds</option>
            </select>
             <small id="emailHelp" className="form-text text-muted">Escoge la moneda que quieres consultar</small>
            </div>
            <div className="form-group">
            <label htmlFor="example">Choose your CryptoCurrency</label>
             <select>
             
                 {criptomonedas.map(criptomonedas => (
                     <CriptomonedaList
                     key = {criptomonedas.CoinInfo.Id}
                     criptomonedas = {criptomonedas}
                     />
                 ))};

             </select>
             <small id="currencyHelp" className="form-text text-muted">Escoge la Cripto moneda</small>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block">CALCULATE</button>
       </form>

    )
};

export default Form;