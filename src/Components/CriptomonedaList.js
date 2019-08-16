import React from 'react';




// Componente / Dropdown, obteniendo estado de consulta para mapear el select.
const CriptomonedaList = ({criptomonedas}) => {
    const{FullName, Name} = criptomonedas.CoinInfo;

    return(
        <option value = {Name}>{FullName}</option>
    );

}

export default CriptomonedaList;