import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import Confirmation from './Confirmation'
import { addDoc, collection } from 'firebase/firestore' 
import { db } from '../IniciarSesion/firebase-config';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Nombre: nombre,
      Apellido: apellido,
      Email: email,
      Edad: edad,
      Fecha: fecha,
      Horario: horario,
      Comentarios: comentarios
    }
    axios.post('https://sheet2api.com/v1/rycI7eBUTkaD/menudaciba', data).then((response) => {
      console.log(response)

    })
    sendEmail(e)
    handleFireBase(e)
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
  };

  const [selected, setSelected] = useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    ElegirEdad(event)
  };

  const ElegirEdad = (e) => setEdad(e.target.value);

  const younger = ["9", "9.30", "10", "10.30", "11", "11.30", "12", "16", "16.30", "17", "17.30", "18"];
  const older = ["17", "17.30", "18", "18.30", "19"];

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


  //Firebase DB

  const handleFireBase = (e)=>{
    e.preventDefault()
  
    const reservasCollRef = collection(db, "reservas")
    addDoc(reservasCollRef, {nombre, apellido, email, edad, fecha, horario, comentarios}).then(response =>{
      console.log(response)
    }).catch(error =>{
      console.log(error.message)
    })
  }

  const isFormValid = ()=>{
    return nombre && apellido && email && fecha && edad && horario
    }


  return (
    <form className="w-full max-w-lg bg-lila-ciba p-4 rounded-lg m-4" ref={form} onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" >
            Nom *
          </label>
          <input required minLength="2" className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-alata" id="nombre" type="text" placeholder="Ingresa tu nombre" name='nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-last-name">
            Cognom *
          </label>
          <input required minLength="2" className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-alata" id="grid-last-name" type="text" placeholder="Ingresa tu apellido" name='apellido' onChange={(e) => setApellido(e.target.value)} value={apellido} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
            E-mail *
          </label>
          <input required className="appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-alata" id="email" type="email" placeholder="Ingresa tu email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
            Edat nena/nen *
          </label>
          <select required className=" block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-alata" onChange={changeSelectOptionHandler} name="edad" value={edad}>
            <option>Triar edat</option>
            <option>0-6</option>
            <option>7-13</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" >
            Data *
          </label>
          <input required className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-alata" id="grid-first-name" type="date" name='fecha' onChange={(e) => setFecha(e.target.value)} value={fecha} />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-last-name">
            Horari *
          </label>
          <select className=" block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-alata" id="grid-last-name" name='horario' onChange={(e) => setHorario(e.target.value)} value={horario}>
            {options}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2" htmlFor="grid-password">
          Informació Complementària
          </label>
          <textarea className=" no-resize appearance-none block w-full bg-violet-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 font-alata" id="message" name='comentarios' onChange={(e) => setComentarios(e.target.value)} value={comentarios}></textarea>
          <p className="text-violeta-ciba text-sm italic">* = Camps obligatoris</p>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 flex items-center">
          <input className="mr-2" required type='checkbox'/>
          <label className="block uppercase tracking-wide text-violeta-ciba text-xs font-alata" htmlFor="grid-password">
            He llegit i accepto la <a href='https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673'><span className='underline'>política de protecció de dades</span> *</a>
          </label>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
      
          <Confirmation deshabilitado={isFormValid()} >
            Reservar
          </Confirmation>
  
          
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  )
}

export default Form