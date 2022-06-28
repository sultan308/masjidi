const { RequestError } = require("../helpers/error");

const validateMasjidIdParam = (req,res,next) => {

    //checks that the id is of type number
    if(isNaN(req.params.id-1))
    {
        return next(new RequestError(400 , "Masjid id needs to be a number."));  
    }

    // if there is no masjid attribute attached to the request it adds it
    req.masjid = req.masjid || {};

    //attaches the id to the majid 
    req.masjid.id = req.params.id;

    
    
    return next();
    
}
const validateReviewIdParam = (req,res,next) => {

    //checks that the id is of type number
    if(isNaN(req.params.id-1))
    {
        return next(new RequestError(400 , "Review id needs to be a number."));  
    }
    // if there is no review attribute attached to the request it adds it
    req.review = req.review || {};
    //add masjid id to review
    req.review.id = req.params.id;
    
    return next();
    
}
const validateMasjidBody= (req,res,next) => {

    //checks if the name and location are in body
    if(!req.body.name || !req.body.location)
    {
        return next( new RequestError(400 , "Request body needs to have name and location"));  
    }
    
    //checks that name and body are strings
    if(!(typeof req.body.name === "string") || !(typeof req.body.location  === "string"))
    {
        return next( new RequestError(400 , "name and location needs to be a string."));  
    }

    //checks that name and body are't empty
    if(!(req.body.name.trim()) || !(req.body.location.trim()))
    {
        return next( new RequestError(400 , "name and location can't be empty."));  
    }

    // if there is no masjid attribute attached to the request it adds it
    req.masjid = req.masjid || {};

    // attachs name and location to the masjid that is atttached to the request
    req.masjid.name = req.body.name;
    req.masjid.location = req.body.location;

    return next();

}
const validateReviewBody = (req,res,next) => {

    //checks if the firstName, lastName, review,  rating are in body
    if(!req.body.firstName || !req.body.lastName || !req.body.review || !req.body.rating)
    {
        return next( new RequestError(400 , "Request body needs to have firstName, lastName, review,  rating"));  
    }
    
    //checks that firstName, lastName and review are strings
    if(!(typeof req.body.firstName === "string") || !(typeof req.body.lastName  === "string") || !(typeof req.body.review  === "string"))
    {
        return next( new RequestError(400 , "firstName, lastName and review needs to be a string."));  
    }

    //checks that firstName, lastName and review are't empty
    if(!(req.body.firstName.trim()) || !(req.body.lastName.trim()) || !(req.body.review.trim()))
    {
        return next( new RequestError(400 , "firstName, lastName and review can't be empty."));  
    }

    //checks that rating is a number between 1 and 5 inclusive
    if( isNaN(req.body.rating-1) || req.body.rating < 1 || req.body.rating > 5 )
    {
        return next( new RequestError(400 , "rating need to be a number between 1 and 5 inclusive"));
    }

    // if there is no review attribute attached to the request it adds it
    req.review = req.review || {};

    // attachs name and location to the masjid that is atttached to the request
    req.review.firstName = req.body.firstName;
    req.review.lastName = req.body.lastName;
    req.review.review = req.body.review;
    req.review.rating = req.body.rating;
    



    return next();

}

module.exports = {
    validateMasjidIdParam,
    validateMasjidBody,
    validateReviewIdParam,
    validateReviewBody
}