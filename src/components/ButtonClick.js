import React from "react";

function ButtonClick() {
  const handleClick = () => {
    alert("El botón fue clickeado");
  };
  return (
    <div>
      <button onClick={handleClick}>Click aqui</button>
    </div>
  );
}
export default ButtonClick;
