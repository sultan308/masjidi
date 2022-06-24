import React, { useContext, useState } from "react";
import MasjdiApi from "../apis/MasjdiApi";
import { MasjidsContext } from "../context/MasjidsContext";

const AddMasjid = () => {

    const {addMasjid} = useContext(MasjidsContext);
    
    const [name, setMasjidName] = useState("");
    const [location , setMasjidLocation] = useState("");

    const handelSubmit = async (e) => {
        e.preventDefault();
        try
        {
           const response = await MasjdiApi.post("/",{
               name,
               location
           });
          
        
           
           addMasjid(response.data.data[0]);
           setMasjidName("");
           setMasjidLocation("");
          
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return (
        <div className="bg-light container-fluid" style={{maxWidth:"100%" }}>
           <div className="p-5">
                <form onSubmit={handelSubmit} className="needs-validation">
                    <div className="form-group row">

                        <div className="col">
                            <input className="form-control" type="text" placeholder="Name" value={name} onChange={e => setMasjidName(e.target.value)}/>
                        </div>

                        <div className="col">
                            <input className="form-control" type="text" placeholder="Location" value={location} onChange={e => setMasjidLocation(e.target.value)}/>
                        </div>

                    <button className="btn btn-success col-1 bi bi-plus-lg" type="submit"> </button>


                    </div>
                </form>
            </div>
        </div>
    );
}; 

export default AddMasjid;