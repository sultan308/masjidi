import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MasjdiApi from "../apis/MasjdiApi";
import { MasjidsContext } from "../context/MasjidsContext";
import { ReviewsContext } from "../context/ReviewsContext";
import AddReview from "../elements/AddReview";
import Footer from "../elements/Footer";
import Header from "../elements/Header";
import Reviews from "../elements/Reviews";
import StarRating from "../elements/StarRating";


const MasjidDetails = () => {

    const masjidId = useParams().id;
    const {selectedMasjid,setSelectedMasjid} = useContext(MasjidsContext);
    
    

    useEffect(() => {
        const fetchData = async () => {
            
       
           try
            { 
                const response = await MasjdiApi.get(`/${masjidId}`);
                setSelectedMasjid(response.data.data);
                
            }
            catch(err)
            {
                console.log(err);
            }
        };
         
        fetchData();
    },[])
    


    return (
        
        <div>
        <Header />
        <h4 className="text-center mt-4 text-white display-4">{selectedMasjid.name}</h4>
        <h5 className="text-center text-white bi bi-geo-alt "> {selectedMasjid.location}</h5>
        <h6 className="text-center p-4 mb-4"><StarRating number={selectedMasjid.count} rating={selectedMasjid.avg_rating}/></h6>
        
        <Reviews />
        <AddReview />
        <Footer />

            
        </div>)
} 

export default MasjidDetails;