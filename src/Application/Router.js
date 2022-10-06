import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import ReserveByAge from "../Pages/ReserveByAge";
import Team from "../Pages/Team";

export default function Router (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/equipo' element={<Team/>}/>
            <Route path='/reservarPorEdad' element={<ReserveByAge/>}/>
        </Routes>
        </BrowserRouter>
    )
}

