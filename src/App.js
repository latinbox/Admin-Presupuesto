import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';


function App() {
  //definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [ gastos, guardarGastos] = useState([]);

  // Cuando agreguegemos jnuevo gasto
  const agregarNuevoGasto = gasto => {
    console.log(gasto);
  }
  return (
    <div className="container">
      <header>
        <h1>Gastos Semanal</h1>
        <div className="contenido-principal contenido">
        { mostrarpregunta ?
          (
            <Pregunta 
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) :  (
          <div className="row">
            <div className="one-half column">
            <Formulario
             agregarNuevoGasto={agregarNuevoGasto}
            />
          </div>
            <div className="one-half column">
              2
            </div>
        </div>
          )
        }
      </div>
    </header>
  </div>
  );
}
export default App;