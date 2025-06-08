import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar, { NavigationBar } from "./Navbar";
import { Slide } from "./Silde";
import MenuItem from "./MenuItem";
import { Footer } from "./footer";




function Lab2() {
    return (
        <>
            <div className="container-fluid bg-dark text-white">
                <div className="row">
                   <NavigationBar/>
                    <Slide />
                    <MenuItem />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Lab2;
