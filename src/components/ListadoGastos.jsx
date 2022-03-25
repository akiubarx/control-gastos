import React from 'react';
import Gasto from './Gasto';
//Recordatorio a futuro, aplicar siempre destructuring a los props ({ ejemplo, ejemplo2 })
const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {
  return (
    <div className='listado-gastos contenedor'>
      { /*Si existe un filtro definido, iteramos sobre todos los gastos, en caso contrario, se muestran todos*/
        filtro ? (
        <> {/*Retornamos un fragment*/}
          <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos en esta categoria'}</h2> 
          {gastosFiltrados.map( gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))
          }
        </>
      ) : (
        <>{/*Retornamos un fragment*/}
          <h2>{gastos.length ? 'Gastos' : 'No hay Gastos aun'}</h2>
          {gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))
          }
        </>
      )
      }      
    </div>
  )
}

export default ListadoGastos
