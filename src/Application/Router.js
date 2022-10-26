import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import ProtectedRoute from "../components/IniciarSesion/ProtectedRoute";
import AboutUs from "../pages/AboutUs";
import ListOfReservations from "../pages/ListOfReservations";
import LoginPage from "../pages/LoginPage";
import Reserve from "../pages/Reserve";
import Team from "../pages/Team";
import { onAuthStateChanged} from 'firebase/auth';
import { auth } from '../components/IniciarSesion/firebase-config';

function Router (){

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser){
                localStorage.setItem('client_id', currentUser.uid)
                localStorage.setItem('client_email', currentUser.email)
            }
            else{
                localStorage.removeItem('client_id')
                localStorage.removeItem('client_email')
            }
        });
    })

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/equipo' element={<Team/>}/>
            <Route path='/sobrenosotros' element={<AboutUs/>}/>
            <Route path='/reservar' element={<Reserve/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/listadereservas' element={<ProtectedRoute><ListOfReservations/></ProtectedRoute>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router
