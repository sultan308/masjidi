import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MasjdiApi from "../apis/MasjdiApi";

const UpdateMasjid = (props) => {

    let navigate = useNavigate();

    const {id} = useParams();
    
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    
    useEffect(()=>{
        const fetchData = async () => {
            try 
            {
                const response = await MasjdiApi.get(`/${id}`);
                setName(response.data.data.name);
                setLocation(response.data.data.location);
            }
            catch(err)
            {

            }
            
        }
        fetchData();

    },[]);

    const updateHandler = async (e) => {

            e.preventDefault();
            try
            {
                await MasjdiApi.put(`/${id}`,{
                   name,
                   location
               });

               navigate(`/`);


      
              
            }
            catch(err)
            {
                console.log(err);
            }

    }
 
    return (
        <div className="p-5">
           <form onSubmit={updateHandler}>
                <div className="form-group">
                    <label htmlFor="name" className="text-light mb-2">Masjid name:</label>
                    <input value={name} onChange={ e => {setName(e.target.value)}} id="name" type="text" className="form-control mb-2" placeholder="Name"/>
                </div>
                <div className="form-group ">
                    <label htmlFor="location" className="text-light mb-2">Masjid location:</label>
                    <input value={location} onChange={e =>{setLocation(e.target.value)}} id="location" type="text" className="form-control mb-2" placeholder="Location"/>
                </div>
                <button type="submit" className="bi bi-box-arrow-in-up btn btn-success  mt-2 p-2" style={{width:"100%"}}> Update masjid</button>
           </form>
        </div>
    );
} 

export default UpdateMasjid;