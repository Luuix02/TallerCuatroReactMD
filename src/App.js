import { useState } from "react";
import ButtonClick from "./components/ButtonClick";
import FormularioUsuario from "./components/FormularioUsuario";
import Resultado from "./components/Resultado";
import Formulario from "./components/Formulario";

function App() {
  const [numero, setNumero] = useState('');

  return (
    <div>
      <ButtonClick />
      <FormularioUsuario />
      <Formulario setNumero = {setNumero} />
      <Resultado numero={numero} />
    </div>
  );
}

export default App;
