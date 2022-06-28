const db = require('./index');

//Retrive all masjids in the database 
const selectAllMasjids = async () => {
    const res = await db.query("SELECT * FROM masjid;");
    return res.rows;

}

//Retrive all masjids in the database with their avarage rating truncated to the first decimal place
const selectAllMasjidsWithAvg = async () => {
    const res = await db.query("SELECT masjid.id,masjid.name,masjid.location , TRUNC(AVG(rating),1) as avg_rating,COUNT(rating) FROM masjid LEFT JOIN reviews ON masjid.id = reviews.masjid_id GROUP BY masjid.id ;");
    return res.rows;
}

//Retrive a masjid by it's id
const selectMasjidById = async ({id})  => {
    const res = await db.query("SELECT * FROM masjid WHERE masjid.id = $1;" ,[id]);
    return res.rows;
}

//Retrive a masjid by it's id with it's avarage rating truncated to the first decimal place
const selectMasjidByIdWithAvg = async({id})  => {
    const res = await db.query("SELECT masjid.id,masjid.name,masjid.location , TRUNC(AVG(rating),1) as avg_rating,COUNT(rating) FROM masjid LEFT JOIN reviews ON masjid.id = reviews.masjid_id WHERE masjid.id = $1 GROUP BY masjid.id;", [id]);
    return res.rows;
}

// Adds a new masjid given an object with attributes name and location
const insertMasjid = async(masjid) => {
    const res =  await db.query("INSERT INTO masjid (name ,location) VALUES ($1,$2) RETURNING *;", 
                 [masjid.name,masjid.location]);
    return res.rows;
}

//update masjid given an object with attributes id , name and location
const updateMasjid = async (masjid) => {
    const res = await db.query("UPDATE masjid SET name =$1 , location = $2 WHERE id = $3 RETURNING *;", 
                    [masjid.name,masjid.location,masjid.id]);
    return res.rows;     
}

//Delete masjid by id returns true if deleted
const deleteMasjd = async ({id}) => {
    
    await db.query("DELETE FROM reviews WHERE masjid_id = $1;" , [id]);
    const res = await db.query("DELETE FROM masjid WHERE id = $1;" , [id]);
    return (res.rowCount > 0);
}

module.exports = {

    selectAllMasjids,
    selectAllMasjidsWithAvg,
    selectMasjidById,
    selectMasjidByIdWithAvg,
    insertMasjid,
    updateMasjid,
    deleteMasjd
}