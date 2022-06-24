import React, { useState, createContext } from "react";

export const MasjidsContext = createContext();

export const MasjidsContextProvider = (props) => {

    const  [masjids, setMasjids] = useState([]);
    const [selectedMasjid, setSelectedMasjid] = useState({});

    

    const addMasjid = (masjid) => {
        setMasjids([...masjids,masjid])
    };

    return (

        <MasjidsContext.Provider value={{masjids , setMasjids, addMasjid, selectedMasjid, setSelectedMasjid,}}>
            {props.children}
        </MasjidsContext.Provider>

    );
}