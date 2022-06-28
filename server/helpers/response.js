const successfullJSON = (dataArray)=>{
    
    let response = {
        status : "success",
        data : dataArray[0]
    };

    if(dataArray.length > 1)
    {
         response.length = dataArray.length;
         response.data = dataArray;
         
    }

    return response;
};

module.exports = { 
    successfullJSON
}