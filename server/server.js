require("dotenv").config();

const express = require("express");

//logging middleware
const morgan = require("morgan");

//cross origin middleware
const cors = require("cors");

// masjid router file
const masjidRoute = require("./routes/masjid.js");
const { errorHandler } = require("./helpers/error.js");

const app = express();
const apiRouter = express.Router();

app.use(cors());
apiRouter.use(morgan("dev"));

app.use("/api/v1/",apiRouter)

// Parse JSON in request body
apiRouter.use(express.json())

apiRouter.use("/masjid" , masjidRoute);

app.use(errorHandler);

const port = process.env.PORT;
app.listen(port , ()=>{console.log(`Listening on port ${port}`)});