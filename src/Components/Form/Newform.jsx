import React from 'react'

function Newform() {
  return (
    <div>
      <form action="https://sheet2api.com/v1/rycI7eBUTkaD/menudaciba/Hoja%25201" method='post'>
    <input type="text" name="nombre" placeholder="Nombre" />
    <input type="text" name="apellido" placeholder="Apellido" />
    <input type="text" name="email" placeholder="Email" />
    <input type="text" name="edad" placeholder="Edad" />
    <input type="text" name="fecha" placeholder="Fecha" />
    <input type="text" name="horario" placeholder="Horario" />
    <input type="text" name="comentarios" placeholder="Comentarios" />
    <button type="submit" onClick="alert('Submitted')">Submit</button>
</form>

    </div>
  )
}

export default Newform