import './Movies.scss';
import React from "react";
import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";


export default function Movies() {
    return(
        <React.Fragment>
           <Navigation />
           <div className="container">
               <Outlet />
           </div>
        </React.Fragment>
    )
}