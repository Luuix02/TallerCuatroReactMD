import React from 'react';

function Formulario({ setNumero }) {
  const handleChange = (event) => {
    setNumero(event.target.value); 
  };

  return (
    <div>
      <input type="number" onChange={handleChange} placeholder="Escribe un numero" />
    </div>
  );
}

export default Formulario;