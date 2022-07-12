const express = require('express');

// registerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /register
const registerRoutes = express.Router();

// the collection that will be needed
const User = require("../models/user.model");

// function for page "bookflix/register"
registerRoutes.route("/register").post(function (req, res) {
    console.log(req.body);
    try
    {
        const user = User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            date_of_birth: req.body.birthday,
            gender: req.body.gender,
            region: req.body.region,
        })
        res.json({ status: 'ok' })
    }
    catch(err)
    {
        res.json({ status: 'error', error: "Duplicate email"});
    }
});

module.exports = registerRoutes;