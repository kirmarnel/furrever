const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")



// Define middleware here
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Define API routes herez

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Furrever',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


