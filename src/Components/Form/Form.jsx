import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Confirmation from './Confirmation';
import axios from 'axios';

function Form() {

  // form states

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [edad, setEdad] = useState('')
  const [fecha, setFecha] = useState('')
  const [horario, setHorario] = useState('')
  const [comentarios, setComentarios] = useState('')

//submit event

const handleSubmit = (e) =>{
  e.preventDefault();
  const data={
    Nombre: nombre,
    Apellido: apellido,
    Email: email,
    Edad: edad,
    Fecha: fecha,
    Horario: horario,
    Comentarios: comentarios
  }
  axios.post('https://app.sheetlabs.com/CCO/menudaciba', data).then((response)=>{
    console.log(response)
  })
}

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_f6uat68',
        'template_sdjraqf',
        form.current,
        'X5yYqiq0T_Uzamy6S')
    emailjs
        .sendForm(
          'service_f6uat68',
        'template_hz31ro6',
        form.current,
        'X5yYqiq0T_Uzamy6S'
        )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    handleSubmit()
  };

  const [selected, setSelected] = React.useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const younger = ["9", "10", "11"];
  const older = ["17", "18", "19"];

  let type = null;

  let options = null;

  if (selected === "0-6") {
    type = younger;
  } else if (selected === "7-13") {
    type = older;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <form className="w-full max-w-lg bg-lila-ciba p-4 rounded-lg mb-4" ref={form} onSubmit={sendEmail} action="https://app.sheetlabs.com/CCO/menudaciba" method='POST'>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" >
            Nombre *
          </label>
          <input required minlength="3" className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Pepita" name='nombre' onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-last-name">
            Apellido *
          </label>
          <input required minlength="2" className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="La pistolera" name='apellido' onChange={(e)=>setApellido(e.target.value)} value={apellido} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
            E-mail *
          </label>
          <input required className="appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="pepita@lapistolera.com" name='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
            Edad ñiña/niño *
          </label>
          <select required className=" block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e)=>setEdad(e.target.value)} name="edad" value={edad}>
            <option>Elegir edad</option>
            <option>0-6</option>
            <option>7-13</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" >
            Fecha *
          </label>
          <input required className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="date" name='fecha' onChange={(e)=>setFecha(e.target.value)} value={fecha} />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-last-name">
            Horario *
          </label>
          <select className=" block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='horario' onChange={(e)=>setHorario(e.target.value)} value={horario}>
            {options}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
            Información Complementaria
          </label>
          <textarea className=" no-resize appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48" id="message" name='comentarios' onChange={(e)=>setComentarios(e.target.value)} value={comentarios}></textarea>
          <p class="text-violeta-ciba text-sm italic">* = Campos obligatorios</p>
        </div>
      </div>
      
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <Confirmation>
            Reservar
          </Confirmation>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  )
}

export default Form

//<input type="hidden" name='_next' value="/reservarPorEdad"/>
//<input type="hidden" name='_captcha' value="false"/>