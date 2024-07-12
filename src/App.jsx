import { useState } from "react";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela"




function App() {
  const [imc, setImc] = useState(null)

  return (

    <>
    <Formulario setImc={setImc}/>
    <Tabela imc={imc}/>
    </>

  )
}

export default App
