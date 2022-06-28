const express = require('express');
const masjidRoute = express.Router();

const masjidReviewsRoute = require('./masjidReviews');


const { validateMasjidIdParam, validateMasjidBody } = require("../middleware/validation");

const { getAllMasjidsWithAvgRating,
        getMasjidByIdWithAvgRating,
        postMasjid,
        putMasjid,
        dltMasjd
        } = require("../controllers/masjid.controller.js")



masjidRoute.use("/:id" , validateMasjidIdParam )

masjidRoute.use("/:id/reviews" , masjidReviewsRoute);


masjidRoute.route("/").get(getAllMasjidsWithAvgRating)
                      .post(validateMasjidBody, postMasjid);


masjidRoute.route("/:id").get(getMasjidByIdWithAvgRating)
                         .put(validateMasjidBody , putMasjid)
                         .delete(dltMasjd);


module.exports = masjidRoute;