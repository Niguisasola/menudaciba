import React from 'react'

function Contacto() {
    return (
        <div className="row">
            <div className="col-sm-6">
                <form className="card" method="POST">
                    <div className="cardbody -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" >
                                Nombre
                            </label>
                            <input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Pepita" name='nombre' />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Teléfono de contacto:
                            </label>
                            <input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="La Pistolera" name='apellido' />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
                                E-mail
                            </label>
                            <input className="appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="pepita.lapistolera@gmail.com" name='email' />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
                                Mensaje:
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48" id="message" name='info complementaria'></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-sm-6">
                <div>
                    <div>
                        <button className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded" type="button">
                            Enviar
                        </button>
                        <button className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded" type="button">
                            Atras
                        </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </div>
        </div>
    )
}

export default Contacto