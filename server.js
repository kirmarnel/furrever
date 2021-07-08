const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require('./config/connection');
const cors = require("cors");
const User = require('./models/User')


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post ('/', (req, res) => {
  User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password
  }).then((user) => {
      res.json(user);
    }).catch((err) => res.json(err));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  });


