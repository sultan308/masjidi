const express = require('express');
const db = require('../db');

const masjidReviewsRoute = express.Router();

const { validateReviewIdParam , validateReviewBody } = require("../middleware/validation");

const {getAllReviews,
       getAllReviewsByMasjidId,
       getReviewById,
       postReview,
       putReview,
       dltReview
      } = require('../controllers/reviews.controller.js')


masjidReviewsRoute.use("/:id" ,validateReviewIdParam);

masjidReviewsRoute.route("/").get(getAllReviewsByMasjidId)
                             .post(validateReviewBody, postReview);
masjidReviewsRoute.route("/:id").get(getReviewById)
                                .put(validateReviewBody, putReview)
                                .delete(dltReview);




module.exports = masjidReviewsRoute;





