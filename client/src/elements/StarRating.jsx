import React from "react";


const StarRating = ({rating   , number }) => {
    const stars = [];
    
    for(let i = 1 ; i <= 5 ; i++)
    {
        let classes;
        if(rating-i <= -1)
        {
            classes = "far fa-star";
        }
        else if(rating-i < 0)
        {
            classes = "fas fa-star-half-alt"
        }
        else 
        {
            classes = "fas fa-star"
        }

        stars.push(<i className={classes} id = {i.toString()} key={i.toString()}></i>)
    }

    if(!isNaN(number))
    {
        stars.push(<span key={"total"}> ({number}) </span>)
    }
    
    return <span className="text-warning">{stars}</span>;
};

export default StarRating;