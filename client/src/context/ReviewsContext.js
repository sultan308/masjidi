import React, { useState, createContext } from "react";

export const ReviewsContext = createContext();

export const ReviewsContextProvider = (props) => {

    const  [reviews, setReviews] = useState([]);
   

    

    const addReview = (review) => {
        setReviews([...reviews,review])
    };

    return (

        <ReviewsContext.Provider value={{ reviews, setReviews, addReview, }}>
            {props.children}
        </ReviewsContext.Provider>

    );
}