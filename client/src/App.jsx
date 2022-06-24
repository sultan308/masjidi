import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//context provider
import {  MasjidsContextProvider } from "./context/MasjidsContext";
import {  ReviewsContextProvider } from "./context/ReviewsContext";

//elments
import Home from "./routes/Home";
import MasjidDetails from "./routes/MasjidDetails";
import MasjidUpdate from "./routes/MasjidUpdate";

const App = () => {
    return (
        <MasjidsContextProvider >
        <ReviewsContextProvider>
        <div>
            <Router>
                <Routes>
                    <Route  exact path="/" element={<Home/>}/>
                    
                        <Route  path="/masjids/:id" element={<MasjidDetails/>}/>
                    
                    <Route  path="/masjids/:id/update" element={<MasjidUpdate/>}/>
                </Routes>

            </Router>
        </div>
        </ReviewsContextProvider>
        </MasjidsContextProvider>
    )
} ;

export default App;