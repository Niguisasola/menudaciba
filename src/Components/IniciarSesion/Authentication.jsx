import React, { useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
}
    from 'firebase/auth';
import { auth } from './firebase-config.js';

function Authentication() {
    const [userEmail,setUserEmail] = useState("")
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    useEffect(()=> {
        setUserEmailFromLocalStorage()
    }, [])

    const setUserEmailFromLocalStorage =() =>
        setUserEmail(localStorage.getItem("client_email"));

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            setUserEmailFromLocalStorage();
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
        setUserEmailFromLocalStorage();
    };

    return (
        <div className=" flex justify-center m-4">
            <div className="w-full max-w-lg bg-lila-ciba p-4 rounded-lg mb-4" >


                <h3 className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2">Crea el teu usuari</h3>
                <div className="flex justify-content-center flex-wrap -mx-3 mb-6">
                    <input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded-3 mt-2 mb-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="email"
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <input className="appearance-none block w-full bg-violet-100 text-grey-700 border border-gray-200 rounded mb-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="password"
                        placeholder="Password..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />

                    <button className='bg-violeta-ciba px-3 py-1 rounded-3 font-alata text-white' onClick={register}>Registra't</button>
                </div>


                <h3 className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mt-2 mb-2">Inicia Sessió</h3>
                <div className='flex justify-center flex-wrap -mx-3 mb-6'>
                    <input className="appearance-none block w-full bg-violet-100 text-grey-600 border border-gray-200 rounded-3 mb-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="email"
                        placeholder="Email..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    <input className="appearance-none block w-full bg-violet-100 text-grey-600 border border-gray-200 rounded-3 mb-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="password"
                        placeholder="Password..."
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />

                    <button className='bg-violeta-ciba px-3 py-1 p-3 rounded-3 font-alata text-white' onClick={login}>Iniciar Sessió</button>
                </div>

                <h4 className="block uppercase tracking-wide text-violeta-ciba text-xs font-bold mb-2">Usuari loguejat:</h4>
                <div className='flex justify-content-center flex-wrap -mx-3 mb-6'>
                    <div className="appearance-none block w-full text-grey-600 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{userEmail}</div>

                    <button className='flex justify-content-center bg-violeta-ciba p-3 px-3 mt-2 py-1 rounded-3 font-alata text-white' onClick={logout}>Tancar Sessió</button>
                </div>
            </div>
        </div>
    );
}
export default Authentication