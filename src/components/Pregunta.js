import React, { Fragment, useState } from 'react';
import Error from './Error';
const Pregunta = ({guardarPresupuesto, guardarRestante}) => {
   //definir state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }
    //Submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if(cantidad <1 || NaN) {
            guardarError(true);
            return;
        }
        // si se pasa validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }
    return (
        <Fragment>
            <h2>Pon tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null }
            <form
             onSubmit={agregarPresupuesto}
            >
                <input
                 type="number"
                 className="u-full-width"
                 placeholder="Coloca tu presupuesto"
                 onChange={definirPresupuesto} 
                />
                <input 
                 type="submit"
                 className="button-primary u-full-width"
                 value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;