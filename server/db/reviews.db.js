const db = require('./index');

//Retrive all reviews in the database 
const selectAllReviews = async () => {
    const res = await db.query("SELECT * FROM reviews;");
    return res.rows;

}
//Retrive all reviews for a masjid by masjid id in the database 
const selectAllReviewsByMasjidId = async ({id}) => {
    const res = await db.query("SELECT * FROM reviews WHERE masjid_id = $1;",[id]);
    return res.rows;
}
//Retrive review by it's id
const selectReviewById = async ({id}) => {
    const res = await db.query("SELECT * FROM reviews WHERE id = $1;",[id]);
    return res.rows;
}
//Insert new review with attributes  : firstName,lastName,rating,review and masjid with attribute id
const insertReview = async(review,masjid) => {
    const res = await db.query("INSERT INTO reviews (masjid_id,firstname,lastname,review, rating) VALUES ($1,$2,$3,$4,$5) RETURNING *;",
                         [masjid.id , review.firstName , review.lastName , review.review ,review.rating]);
    return res.rows;
}

//Update review parseing in a review with attributes  : firstName,lastName,rating,review,masjidId,id
const updateReview = async(review) => {
    const res = await db.query("UPDATE reviews SET firstname =$1 , lastname = $2 , review = $3 , rating = $4 WHERE masjid_id = $5 AND id = $6 RETURNING *;",
         [review.firstName, review.lastName , review.review, review.rating, review.masjidId , review.id]);
    return res.rows;
}

//Delete review by id
const deleteReview = async({id}) => {
    const res = await db.query("DELETE FROM reviews WHERE id = $1;",[id]);
    return (res.rowCount > 0);
}

module.exports = {

    selectAllReviews,
    selectAllReviewsByMasjidId,
    selectReviewById,
    insertReview,
    updateReview,
    deleteReview

}