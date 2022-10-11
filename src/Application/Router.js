import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import AboutUs from "../Pages/AboutUs";
import Reserve from "../Pages/Reserve";
import Team from "../Pages/Team";

export default function Router (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/equipo' element={<Team/>}/>
            <Route path='/sobrenosotros' element={<AboutUs/>}/>
            <Route path='/reservar' element={<Reserve/>}/>
        </Routes>
        </BrowserRouter>
    )
}

