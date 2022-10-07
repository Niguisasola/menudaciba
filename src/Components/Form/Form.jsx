import React from 'react'

function Form() {
  return (
    <form className="w-full max-w-lg bg-lila-ciba p-4 rounded-lg" action="https://formsubmit.co/lamanna.mflorencia@gmail.com" method="POST">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" >
          Nombre
        </label>
        <input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Florencia" name='nombre'/>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" for="grid-last-name">
          Apellido
        </label>
        <input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Lamanna" name='apellido'/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" for="grid-password">
          E-mail
        </label>
        <input className="appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name='email'/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" >
          Fecha
        </label>
        <input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="date" name='fecha'/>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" for="grid-last-name">
          Horario
        </label>
        <select className=" block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='horario'>
            <option value="9hs">9:00</option>
            <option value="9hs">9:30</option>
            <option value="9hs">10:00</option>
        </select>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" for="grid-password">
          Información Complementaria
        </label>
        <textarea className=" no-resize appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48" id="message" name='info complementaria'></textarea>
      </div>
    </div>
    <div className="md:flex md:items-center">
      <div className="md:w-1/3">
        <button className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded" type="button">
          Reservar
        </button>
      </div>
      <div className="md:w-2/3"></div>
    </div>
  </form>
  )
}

export default Form

//<input type="hidden" name='_next' value="/reservarPorEdad"/>
//<input type="hidden" name='_captcha' value="false"/>