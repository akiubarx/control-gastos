import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
//Recordatorio a futuro, aplicar siempre destructuring a los props ({ ejemplo, ejemplo2 })
const ControlPresupuesto = ({ gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

  const [porcentaje, setPorcentaje ] = useState(0)
  const [ disponible, setDisponible ] = useState(0)
  const [ gastado, setGastado ] = useState(0)
  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)

    const totalDisponible = presupuesto - totalGastado;

    // Calcualr el procentaje Gastado
    const nuevoPorcentaje = ( ( (presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
    
    setDisponible(totalDisponible)
    setGastado(totalGastado)
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1000);
  }, [gastos])

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar la aplicacion?')
    if(resultado){ //True
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            /*pathColor: si 'porcentaje' es mayor a 100, ? pinta de 'rojo', en caso contrario : pinta de 'azul'*/
            pathColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
            trailColor: '#b3b3b3',
            textColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
          })}
          value={porcentaje}
          text={`${porcentaje}%`}
        />
      </div>

      <div className='contenido-presupuesto'>
        <button 
          className='reset-app' 
          type='button'
          onClick={handleResetApp}
        >
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
        </p>
        {/*Modificamos dinamicamente el style segun el consumo*/}
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          <span>Disponible: </span>{formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>{formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
