import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MasjdiApi from "../apis/MasjdiApi";
import { ReviewsContext } from "../context/ReviewsContext";
import StarRating from "./StarRating";

const Reviews = () => {

    
    const {reviews , setReviews} = useContext(ReviewsContext);
    
    const masjidId = useParams().id;

    useEffect(()=>{

        const fetchReviews = async ()=>
        {
            try
            {
                const response = await MasjdiApi.get(`/${masjidId}/reviews/`);
                setReviews(response.data.data);
            }
            catch(err)
            {
                console.log(err);
            }
        }

        fetchReviews();

    },[]) 

    const getClass = (rating) => {

    }


    return (
        <div className="bg-light text-center p-4 justify-content-center">
        <div className="g-4 row row-cols-3 bg-light justify-content-center" style={{maxWidth:"100%"}}>
            {reviews && reviews.map((review)=>{
                return(
                    <div className="col"key = {review.id} >
                        <div  className={"card text-white "+(review.rating >= 3 ? "bg-success" : "bg-danger")} >
                            <div className="card-header d-flex justify-content-between">
                                <span>{review.firstname+" "+review.lastname}</span>
                                <span><StarRating rating= {review.rating}/></span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{review.review}</p>
                            </div>
                        </div>
                    </div>
                )

            })
            }

        </div>
        </div>
    );
} 

export default Reviews;