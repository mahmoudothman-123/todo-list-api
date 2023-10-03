const express = require("express");
const dotenv = require('dotenv');
dotenv.config({path:"services/config.env"});

const app = express();
app.use(express.json());
const port = process.env.PORT;


app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(port, () =>
  console.log("you app work at ")
)
