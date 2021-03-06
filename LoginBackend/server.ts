const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users.ts");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

const db = require("./config/keys.ts").mongoURI;

mongoose.connect(
    db,
    { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport.ts")(passport);

app.use("/api/users", users);

////////// fix?
const pantryRouter = require("./routes/api/PantryItems.js");
app.use("/PantryItems", pantryRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));