import React from 'react'

function Form() {
  return (
    <div className='w-3/5 bg-verde-ciba h-96 flex flex-col'>
        <form classname="" action="">
            <label>Nombre
                <input type="text" name="name" id="name" />
            </label>
            <label>Email
                <input type="email" name="email" id="" />
            </label>
            <label>Teléfono
            <input type="tel" name="telephone" id="" />
            </label>
            <label>Fecha
            <input type="date" name="date" id="" />
            </label>
            <select name="times" id=""></select>
            <textarea></textarea>
        
        </form>
    </div>
  )
}

export default Form