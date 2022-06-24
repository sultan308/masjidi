import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();
    const goHome = () => navigate("/");
    return (
       
        <header className="p-3 bg-secondary text-white">

                <div className="container text-center">
                    <div className="text-center ">
                        <h1 class="text-center bi bi-geo-fill display-1" onClick={goHome}>Masjidi</h1>
                    
        
                    </div>
                </div>
            </header>
    );
} 

export default Header;