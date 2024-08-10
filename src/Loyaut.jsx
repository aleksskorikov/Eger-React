import React from 'react';
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Loyaut = () => {
return (
    <div>
        <>
            <div className="body">
                <Header />   
                <Outlet />
                <Footer />
            </div>
            
        </>
    </div>
)
}

export default Loyaut