import { useState, useEffect } from 'react'
//Recordatorio a futuro, aplicar siempre destructuring a los props ({ ejemplo, ejemplo2 })
const Filtros = ( {filtro, setFiltro} ) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
          <label>Filtrar Gastos</label>
          <select
            value={filtro}
            onChange={e => setFiltro(e.target.value) }
          >
            <option value="">-- Ver todos los gastos --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros