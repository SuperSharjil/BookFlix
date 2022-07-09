const express = require('express');

// registerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /register
const registerRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");


registerRoutes.route("/register").post(function (req, res) {
    console.log(req.body);
});

module.exports = registerRoutes;