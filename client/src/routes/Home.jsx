import React from "react";
import AddMasjid from "../elements/AddMasjid";
import Footer from "../elements/Footer";
import Header from "../elements/Header";
import MasjidsList from "../elements/MasjidsList";

const Home = () => {
    return (
        <div>
            <Header /> 
            <AddMasjid />
            <div className="ps-3 pe-3">   
                <MasjidsList />
            </div>
            <Footer />
        </div>
    );
} 

export default Home;