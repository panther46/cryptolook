import React from 'react';


function Form() {
    return(
       <form>
           <div class="form-group">
            <label for="example">Choose your Currency</label>
             <input type="email" class="form-control" id="example" aria-describedby="emailHelp" placeholder="Currency"></input>
             <small id="emailHelp" class="form-text text-muted">Escoge la moneda que quieres consultar</small>
            </div>
            <div class="form-group">
            <label for="example">Choose your CryptoCurrency</label>
             <input type="email" class="form-control" id="example" aria-describedby="Helop" placeholder="Currency"></input>
             <small id="currencyHelp" class="form-text text-muted">Escoge la Cripto moneda</small>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">CALCULATE</button>
       </form>

    )
};

export default Form;