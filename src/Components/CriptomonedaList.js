import React from 'react';



const CriptomonedaList = ({criptomonedas}) => {
    const{FullName, Name} = criptomonedas.CoinInfo;

    return(
        <option value = {Name}>{FullName}</option>
    );

}

export default CriptomonedaList;