const { RequestError } = require("../helpers/error");
const masjidQueries = require('../db/masjids.db.js');
const { successfullJSON } = require('../helpers/response.js');

const getAllMasjids = async (req,res,next) => {
    const masjids = await masjidQueries.selectAllMasjids();
    res.status(200).json(successfullJSON(masjids));
}

const getAllMasjidsWithAvgRating = async (req,res,next) => {
    const masjids = await masjidQueries.selectAllMasjidsWithAvg();
    res.status(200).json(successfullJSON(masjids));
}

const getMasjidById = async (req,res,next) => {

    const masjids = await masjidQueries.selectMasjidById(req.masjid);
    if(masjids.length === 0) return next(new RequestError(404 , "Masjid doesn't exist."));
    res.status(200).json(successfullJSON(masjids));

}

const getMasjidByIdWithAvgRating = async (req,res,next) => {

    const masjids = await masjidQueries.selectMasjidByIdWithAvg(req.masjid);
    if(masjids.length === 0) return next(new RequestError(404 , "Masjid doesn't exist."));
    res.status(200).json(successfullJSON(masjids));

}

const postMasjid = async (req,res,next) => {

    const masjid = await masjidQueries.insertMasjid(req.masjid);
    res.status(201).json(successfullJSON(masjid))
     
};

const putMasjid = async (req,res,next) => {
    
    const result = await masjidQueries.updateMasjid(req.masjid);
    res.status(200).json(successfullJSON(masjid));
    
}

const dltMasjd = async (req,res,next) => {
    
    const deleted = await masjidQueries.deleteMasjd(req.masjid);
               
    if(!deleted) return next( new RequestError(404,"Faild to delete, Masjid doesn't exist."));

    res.status(204).send();
    
}

module.exports = {

    getAllMasjids,
    getAllMasjidsWithAvgRating,
    getMasjidById,
    getMasjidByIdWithAvgRating,
    postMasjid,
    putMasjid,
    dltMasjd
    
}