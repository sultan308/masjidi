const express = require('express');
const db = require('../db');

const masjidReviewsRoute = express.Router();

masjidReviewsRoute.use('/:id' ,(req,res,next) => {

    req.reviewId = parseInt(req.params.id);

    if(Number.isInteger(req.reviewId))
    {
        console.log(req.reviewId);
        next();
    }
    else
    {
        
        res.status(400).json(
            {
                status : "Failed",
                lenght : 0,
                data : {}
            }
        )
    }
});

masjidReviewsRoute.get('/',async (req,res) => 
{
    try {
        const result = await db.query("SELECT * FROM reviews WHERE masjid_id = $1;",[req.masjidId]);

        res.status(200).json({
            status : "success",
            lenght : result.rows.length,
            data : result.rows
        });
    }
    catch(err)
    {
        console.log(err)
    }
});
masjidReviewsRoute.get('/:id',async (req,res) => 
{
    try {
        const result = await db.query("SELECT * FROM reviews WHERE masjid_id = $1 AND id = $2;",[req.masjidId,req.reviewId]);

        res.status(200).json({
            status : "success",
            lenght : result.rows.length,
            data : result.rows[0]
        });
    }
    catch(err)
    {
        console.log(err)
    }
});

masjidReviewsRoute.post('/',async (req , res) => {
    try {
        const newReview = req.body
        const result = await db.query("INSERT INTO reviews (masjid_id,firstname,lastname,review, rating) VALUES ($1,$2,$3,$4,$5) RETURNING *;",
                                [req.masjidId , newReview.firstName , newReview.lastName , newReview.review ,newReview.rating]);
        res.status(201).json({
            status : "success",
            data : result.rows
        });

    }
    catch(err)
    {

    }
});
masjidReviewsRoute.delete('/:id',async (req,res) => 
{
    try {
        const result = await db.query("DELETE FROM reviews WHERE masjid_id = $1 AND id = $2;",[req.masjidId,req.reviewId]);

        res.status(204).json({
            status : "success",
            data : []
        });
    }
    catch(err)
    {
        console.log(err)
    }
});
masjidReviewsRoute.put('/:id', async (req,res) => {
    
    try
    {
        
        const result = await db.query("UPDATE reviews SET firstname =$1 , lastname = $2 , review = $3 , rating = $4 WHERE masjid_id = $5 AND id = $6RETURNING *;",
         [req.body.firstName, req.body.lastName , req.body.review, req.body.rating, req.masjidId , req.reviewId]);

        res.status(200).json({
            status : "success",
            data : result.rows
        });
    }
    catch(err) 
    {
        console.log(err);
    }
    

});



module.exports = masjidReviewsRoute;





