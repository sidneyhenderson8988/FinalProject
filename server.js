//Budget API
const express = require('express');
const bodyParser = require("body-parser")
const router = express.Router();
const dbName = require("./config/config").mongoURI;
const mongoose = require('mongoose');

const budget = require("./routes/budget_db");

const cors = require('cors');

const app = express();
const port = 3000;



app.use(cors());
app.use(bodyParser.json());

mongoose.connect(dbName).then(() => console.log("Connected to mongo database")).catch(() => console.log(err));

app.get("/", (req,res) => {
    res.send("This is the restAPI")
})

app.use("/budget", budget)

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});