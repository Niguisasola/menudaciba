import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_f6uat68',
        'template_sdjraqf',
        form.current,
        'X5yYqiq0T_Uzamy6S')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  const [selected, setSelected] = React.useState("");

  /** Function that will set different values to state variable
  * based on which dropdown is selected
  */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  /** Different arrays for different dropdowns */
  const younger = ["9", "10", "11"];
  const older = ["17", "18", "19"];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  /** Setting Type variable according to dropdown */
  if (selected === "0-6") {
    type = younger;
  } else if (selected === "7-13") {
    type = older;
  }

  /** If "Type" is null or undefined then options will be null,
  * otherwise it will create a options iterable based on our array
  */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <form className="w-full max-w-lg bg-lila-ciba p-4 rounded-lg mb-4" ref={form} onSubmit={sendEmail}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" >
            Nombre
          </label>
          <input required className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Pepita" name='nombre' />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-last-name">
            Apellido
          </label>
          <input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="La pistolera" name='apellido' />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
            E-mail
          </label>
          <input className="appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="pepita@lapistolera.com" name='email' />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
            Edad ñiña/niño
          </label>
          <select className=" block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={changeSelectOptionHandler}>
            <option>Elegir edad</option>
            <option>0-6</option>
            <option>7-13</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" >
            Fecha
          </label>
          <input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="date" name='fecha' />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-last-name">
            Horario
          </label>
          <select className=" block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='horario'>
            {options}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
            Información Complementaria
          </label>
          <textarea className=" no-resize appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48" id="message" name='info complementaria'></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded" type="submit">
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