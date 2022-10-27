import React, { useEffect, useState } from 'react';
import {
    signInWithEmailAndPassword,
    signOut
}
    from 'firebase/auth';
import { auth } from './firebase-config.js';
import { Link } from 'react-router-dom';

function Authentication() {
    const [userEmail, setUserEmail] = useState("")
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    useEffect(() => {
        setUserEmailFromLocalStorage()
    }, [])

    const setUserEmailFromLocalStorage = () =>
        setUserEmail(localStorage.getItem("client_email"));



    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            setUserEmailFromLocalStorage();
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
        setUserEmailFromLocalStorage();
    };

    const loggedIn = localStorage.getItem('client_id')


    return (
        <div className=" flex justify-center m-4 self-center">
            <div className="w-full max-w-lg bg-lila-ciba p-4 rounded-lg mb-4" >
                {loggedIn? null : <div>  <h3 className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mt-2 mb-2">Inicia Sessió</h3>
                <div className='flex justify-center flex-wrap -mx-3 mb-6'>
                    <input className="appearance-none block w-full bg-violet-100 text-grey-600 border border-gray-200 rounded-3 mb-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="email"
                        placeholder="administrador@email.com"
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    <input className="appearance-none block w-full bg-violet-100 text-grey-600 border border-gray-200 rounded-3 mb-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="password"
                        placeholder="*******"
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />

                    <button className='mt-3 bg-violeta-ciba px-3 py-1 p-3 rounded-3 font-alata text-white' onClick={login}>Iniciar Sessió</button>
                </div></div>}
              
                {loggedIn?
                <div>
                <div className='flex justify-around mb-3'>
                <h4 className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold flex items-end">Usuari loguejat:</h4>
                <div className="appearance-none block text-grey-600 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex items-center font-alata">{userEmail}</div>
                </div>
                <div className='flex justify-around flex-wrap -mx-3 mb-6'>
                   
                    <Link to="/listadereservas"><button className='flex justify-content-center bg-violeta-ciba p-3 px-3 mt-2 py-1 rounded-3 font-alata text-white'>Veure totas les reserves</button></Link>
                    <button className='flex justify-content-center bg-violeta-ciba p-3 px-3 mt-2 py-1 rounded-3 font-alata text-white' onClick={logout}>Tancar Sessió</button>
                </div></div> : null
                }
            </div>
        </div>
    );
}
export default Authentication