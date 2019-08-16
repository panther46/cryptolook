import React from 'react';


const Cotizacion = ({resultado}) => {

    // Si el objeto que viene del componente principal (resultado) esta vacio esta funcion no retorna nada, esto impide que se ejecute y muestre el titulo sin contenido.
    if (Object.keys(resultado).length === 0) return null;

    return(
        <div className = "resultado">
            <h2>Result</h2>
            <p className = "precio">The Price is <span>{resultado.PRICE}</span></p>

            <p>Highest price of the day:<span>{resultado.HIGHDAY}</span></p>
            <p>Lowest price of the day:<span>{resultado.HIGHDAY}</span></p>
            <p>Variation last 24 hours:<span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Last update:<span>{resultado.LASTUPDATE} </span></p>
        </div>

    )

};


export default Cotizacion;