const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;
app.use(cors());
// whatever comes in req.body is in json format
app.use(express.json());

// import routes
app.use(require("./routes/register"));
// app.use(require("./routes/login"));

// home page of server
app.get('/', (req, res) => {
    res.send("Haha Vodox");
});

// connecting to database
mongoose.connect(process.env.ATLAS_URI, {dbName: "BookFlix", useNewUrlParser: true, useUnifiedTopology: true})
  .then( ()=> {
    console.log("Successfully connected to MongoDB.")
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  })



// // get driver connection
// const dbo = require("./db/conn");
 
// perform a database connection when server starts
// app.listen(port, () => {
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });