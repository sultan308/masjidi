
class RequestError extends Error {
    constructor(statusCode, msg) {
      super();
      this.status = "Fail";
      this.statusCode = statusCode || 500;
      this.msg = msg;
    }
  }

const errorHandler = (err,req,res,next) => 
{
    const {statusCode, msg} = err;
    
    console.log(`Error ocured ${statusCode} : ${msg}`);
    
    res.status(statusCode).json({
        status : "Fail",
        statusCode ,
        msg : statusCode === 500 ? "Error occured" : msg

    });
}

module.exports = {
    RequestError,
    errorHandler
}