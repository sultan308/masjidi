require("dotenv").config();

const morgan = require("morgan");

const cors = require("cors");

const express = require("express");

const app = express();

const apiRouter = express.Router();

const masjidRoute = require("./routes/masjid.js");

const port = process.env.PORT;

app.use(cors());

app.use("/api/v1/",apiRouter)

apiRouter.use(morgan("dev"));

apiRouter.use(express.json())

apiRouter.use("/masjid" , masjidRoute)

app.listen(port , ()=>{console.log(`Listening on port ${port}`)});