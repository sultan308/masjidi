
import React , {useContext, useEffect } from "react";
import MasjdiApi from "../apis/MasjdiApi";
import { MasjidsContext } from "../context/MasjidsContext";
import {useNavigate} from 'react-router-dom'
import StarRating from "./StarRating";

const MasjidsList = (props) => {

    let navigate = useNavigate();

    const {masjids , setMasjids} = useContext(MasjidsContext);

    useEffect(() =>{
        
        const fetchData = async ()=>{

        try
        {
            const response = await MasjdiApi.get("/");
            setMasjids(response.data.data);

            
        }
        catch(err)
        {
            console.log();
        }


    }
    fetchData();
    },[]);

    const handelDelete = async (e,masjidId) =>
    {
        e.stopPropagation();
        try
        {
            const response = await MasjdiApi.delete(`/${masjidId}`);
            setMasjids(masjids.filter((masjid => masjid.id !== masjidId)))
            console.log(response);
        }
        catch(err)
        {
            console.log();
        }
    }

    const handelUpdate = (e,masjidId) => {

        e.stopPropagation();
        navigate(`/masjids/${masjidId}/update`);


    }
    const handleMasjidSelect = (masjidId) => {

        navigate(`/masjids/${masjidId}`);

    }
    return (
        <div className="list-group">
            <table className="table table-dark table-hover">
                <thead>
                <tr className="bg-primary lead">
                    <th scope="col" className="text-center">Masjid</th>
                    <th scope="col" className="text-center">Location</th>
                    <th scope="col" className="text-center">Rating</th>
                    <th scope="col-1" className="text-center">Edit</th>
                    <th scope="col-1" className="text-center">Delete</th>
                </tr>
                </thead>
                <tbody>

                    { masjids && masjids.map( (masjid) => {
                        return(   
                        <tr onClick={()=>{handleMasjidSelect(masjid.id)}} key = {masjid.id} >
                                <td className="text-center lead">{masjid.name}</td>
                                <td className="text-center lead">{masjid.location}</td>
                                <td className="text-center"><StarRating number={masjid.count ? masjid.count : 0} rating={masjid.avg_rating ? masjid.avg_rating : 0} /></td>
                                <td className="text-center">
                                <button onClick={ (e) => handelUpdate(e,masjid.id)} className="bi bi-box-arrow-in-up btn btn-info text-white"> Update</button>
                                </td>
                                <td className="text-center">
                                <button onClick={(e) => { handelDelete(e,masjid.id)}} className="btn btn-danger bi bi-x-lg"></button>
                                </td>

                        </tr>)
                        })}
                
                </tbody>
            </table>
    </div>
    );
} 

export default MasjidsList;