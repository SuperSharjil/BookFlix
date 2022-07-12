// const express = require('express');

// // jsonwebtokens are used for sign in. The payload in base64
// // encoded between the two dots
// // e.g.  "sth.payload.sth" 
// const jwt = require('jsonwebtoken');

// // for hashing passwords
// const bcrypt = require('bcryptjs');

// // registerRoutes is an instance of the express router.
// // We use it to define our routes.
// // The router will be added as a middleware and will take control of requests starting with path /register
// const registerRoutes = express.Router();

// // the collection that will be needed
// const User = require("../models/user.model");

// // function for page "bookflix/register"
// registerRoutes.route("/login").post(function (req, res) {
//     console.log(req.body);

//     // finding a matching record
//     const user = User.findOne({
//         email: req.body.email,
//     });

//     if(!user)
//     {
//         return res.json( { status: "error", error: "Invalid Login"} );
//     }

//     const isPasswordValid = bcrypt.compare(req.body.password, user.password)

//     if(isPasswordValid)
//     {
//         const token = jwt.sign(
//             {
//                 username: user.username,
//                 email: user.email,
//             },
//             // secret key
//             process.env.LOGIN_SECRET_KEY 
//         )

//         return res.json({ status: "ok", user: token });
//     }
//     else
//     {
//         return res.json({ status: "error", user: false });
//     }
// });

// module.exports = registerRoutes;