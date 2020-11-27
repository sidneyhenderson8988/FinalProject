const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
var objectID = require("mongodb").objectID;
const user = require("../models/user_schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require('../config/config');

router.get("/allUsers", (req,res) => {
    user.find().then((result) => {
        if (!result){
            return res.status(404).json({Error:"User not found"});
        }
        res.status(200).json(result);
    })
    .catch((e) => res.status(404).json({Error:"User not found"}));
});