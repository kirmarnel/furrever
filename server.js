const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");



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

// Define API routes herez

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI || '',
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


