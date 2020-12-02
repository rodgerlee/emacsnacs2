const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

const db = require("./config/keys.ts").mongoURI;

mongoose.connect(
    db,
    { useNewUrlPasrer: true }
    )
    .then(() => console.log("MongoDB connected"))
    .catch((err:any) => console.log(err));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));