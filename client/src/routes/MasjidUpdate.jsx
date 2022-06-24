import React from "react";
import Footer from "../elements/Footer";
import Header from "../elements/Header";
import UpdateMasjid from "../elements/UpdateMasjid";

const MasjidUpdate = () => {
    return (
        <div>
            <Header />
            <h1 className="text-center mt-4 text-white display-4 ">Update masjid</h1>
            <UpdateMasjid />
            <Footer />
        </div>)
} 

export default MasjidUpdate;