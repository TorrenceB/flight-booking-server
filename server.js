/*  1. Initialize npm and install dependencies:
        - Nodemon
        - Express.js
    2. Initialize git repo
    3. Initialize server, assign port number
    4. React UI calls express server rather than SkyScanner
    5. Parameters are forwarded as they are
    6. Deliver SkyScanner response to UI
*/

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const fetchFlightData = require("./controllers/fetchFlightData");

app.use(cors());

app.get("/", (req, res, next) => {
  res.send("Landing view");
});

app.get("/places", (req, res, next) => {
  fetchFlightData({
    endpoint: "/autosuggest/v1.0/UK/GBP/en-GB/",
    params: { query: "Stockholm" },
  }).then((data) => {
    res.json(data);
  });
});

app.listen(port);
console.log(`App running at port ${port}`);
