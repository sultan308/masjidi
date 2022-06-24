import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  
    return (
       
        <footer className="p-2 bg-secondary text-white" style={{bottom: "0px",position: "relative",width:"100%"}}>

                <div className="container text-center" >
                    <div className="text-center ">
                        <p className="bi bi-diagram-3 lead"> Made by Ahmed Soltan.</p>
                    </div>
                </div>
        </footer>
    );
} 

export default Footer;