const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Joi = require("joi");
const app = express();

/*************************************************************************************************/
/*                                             MIDDLEWARE                                        */
/*************************************************************************************************/

//app.use() is for middleware use -> use(1: the alias of your intended folder, 2: the path to the actual masked folder)
app.use("public", express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*************************************************************************************************/

// app.get("/", (req, res) => {
//   res.send("Hello World from ExpressJS!");
// });

app.post("/", (req, res) => {
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required(),
  });

  try {
    console.log(req.body);
    const value = schema.validate(req.body);
    if (value.err) {
      throw new Error(err);
    }
    console.log(value);
    res.send("Successfully passed validation");
  } catch (err) {
    console.log(err);
    res.send("an error has occurred");
  }
});

app.get("/example", (req, res) => {
  res.send("Example with route");
});

app.get("/example/:name/:age", (req, res) => {
  //http://localhost:3000/example/lothar/99?tut=think&sort=yes
  console.log(req.query); // We use query stringif we want optional params.
  console.log(req.params); // We use 'params' on compulsory params.
  res.send(`${req.params.name} : ${req.params.age}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.listen(3000);
