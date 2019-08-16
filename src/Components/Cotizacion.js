import React from 'react';


const Cotizacion = ({resultado}) => {

    // Si el objeto que viene del componente principal (resultado) esta vacio esta funcion no retorna nada, esto impide que se ejecute y muestre el titulo sin contenido.
    if (Object.keys(resultado).length === 0) return null;

    return(
        <div className = "resultado">
            <h2>Resultado</h2>
        </div>

    )

};


export default Cotizacion;