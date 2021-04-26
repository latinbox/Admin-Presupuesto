import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <h2>Agrega tus gastos aquí</h2>
            <div>
                <label>Nombre Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                />
            </div>
            <input 
             type="submit"
             className="button-primary u-full-width"
             value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;