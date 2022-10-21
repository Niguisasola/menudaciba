import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs";
import LoginPage from "../pages/LoginPage";
import Reserve from "../pages/Reserve";
import Team from "../pages/Team";

export default function Router (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/equipo' element={<Team/>}/>
            <Route path='/sobrenosotros' element={<AboutUs/>}/>
            <Route path='/reservar' element={<Reserve/>}/>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

