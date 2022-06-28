const { RequestError } = require("../helpers/error");
const reviewQueries = require('../db/reviews.db.js');
const { successfullJSON } = require('../helpers/response.js');

const getAllReviews = async (req,res,next) => {
    const reviews = await reviewQueries.selectAllReviews();
    res.status(200).json(successfullJSON(reviews));
}

const getAllReviewsByMasjidId = async (req,res,next) => {
    const reviews = await reviewQueries.selectAllReviewsByMasjidId(req.masjid);
    res.status(200).json(successfullJSON(reviews));
}

const getReviewById = async (req,res,next) => {
    const review = await reviewQueries.selectReviewById(req.review);
    if(review.length === 0) return next(new RequestError(404 , "Review doesn't exist."));
    res.status(200).json(successfullJSON(review));
}

const postReview = async (req,res,next) => {

    const review = await reviewQueries.insertReview(req.review,req.masjid);
    res.status(201).json(successfullJSON(review));
     
};

const putReview = async (req,res,next) => {

    const review = await reviewQueries.updateReview(req.review);
    res.status(201).json(successfullJSON(review));
     
};

const dltReview = async (req,res,next) => {
    
    const deleted = await reviewQueries.deleteReview(req.review);
    
    if(!deleted) return next( new RequestError(404,"Faild to delete, Review doesn't exist."));

    res.status(204).send();
    
};

module.exports = {

    getAllReviews,
    getAllReviewsByMasjidId,
    getReviewById,
    postReview,
    putReview,
    dltReview

}