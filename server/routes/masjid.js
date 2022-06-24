const express = require('express');

const db = require('../db');
const masjidRoute = express.Router();

const masjidReviewsRoute = require('./masjidReviews');

masjidRoute.use("/:id" , (req,res,next) => {

    req.masjidId = parseInt(req.params.id);

    if(Number.isInteger(req.masjidId))
    {
        console.log(req.masjidId);
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
})
masjidRoute.use("/:id/reviews" , masjidReviewsRoute);



masjidRoute.get("/" , async (req,res) => {
    
    try {
        const result = await db.query("Select masjid.id,masjid.name,masjid.location , TRUNC(AVG(rating),1) as avg_rating,COUNT(rating) from masjid LEFT JOIN reviews ON masjid.id = reviews.masjid_id GROUP BY masjid.id ;");

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

masjidRoute.get("/:id", async (req,res) => {
    
    try 
    {
        const result = await db.query("Select masjid.id,masjid.name,masjid.location , TRUNC(AVG(rating),1) as avg_rating,COUNT(rating) from masjid LEFT JOIN reviews ON masjid.id = reviews.masjid_id WHERE masjid.id = $1 GROUP BY masjid.id;", [req.masjidId]);

        if(result.rows.length === 0)
        {
            res.status(404).json({
                status : "Not found",
                data : []
            });
        }
        else
        {
          res.status(200).json({
            status : "success",
            data : result.rows[0]
            });  
        }

        
    }
    catch(err)
    {
        console.log(err);
    }
});

masjidRoute.post("/" , async (req,res) => {

    try 
    {
        const result = await db.query("INSERT INTO masjid (name ,location) VALUES ($1,$2) RETURNING *;", [req.body.name,req.body.location]);

        res.status(201).json({
            status : "success",
            data : result.rows
        });
    }
    catch(err)
    {
        console.log("faild");
    }
    
    
});

masjidRoute.put("/:id" , async (req,res) => {
    try 
    {
        const result = await db.query("UPDATE masjid SET name =$1 , location = $2 WHERE id = $3 RETURNING *;", [req.body.name,req.body.location,req.masjidId]);

        res.status(200).json({
            status : "success",
            data : result.rows
        });
    }
    catch(err)
    {
        console.log("faild");
    }
});

masjidRoute.delete("/:id" , async (req,res) => {
    try 
    {
        await db.query("DELETE FROM reviews WHERE masjid_id = $1;" , [req.masjidId]);
        const result = await db.query("DELETE FROM masjid WHERE id = $1 ;", [req.masjidId]);
        

        res.status(204).json({
            status : "success",
            data : []
        });
    }
    catch(err)
    {
        console.log(err);
    }
});

module.exports = masjidRoute;