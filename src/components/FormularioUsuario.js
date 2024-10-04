import React, { useState } from 'react';

const FormularioUsuario = () => {

  const [nombre, setNombre] = useState('');
  const [mostrarNombre, setMostrarNombre] = useState('');


  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
    setMostrarNombre(nombre);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de usuario:
          <input
            type="text"
            value={nombre}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Mostrar nombre</button>
      </form>

      {mostrarNombre && (
        <p>El nombre ingresado es: {mostrarNombre}</p>
      )}
    </div>
  );
};

export default FormularioUsuario;
