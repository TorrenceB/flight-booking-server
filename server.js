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

const axios = require("axios").default;

const fetchFlightData = () => {
  const options = {
    method: "GET",
    url: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",
    params: { query: "Stockholm" },
    headers: {
      "x-rapidapi-key": "069dfdaf8bmshbf72b4525dae034p10dc6ejsn27b330717476",
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    },
  };

  const apiInstance = axios
    .request(options)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return apiInstance;
};
app.get("/", (req, res) => {
  res.send("A response from the server");
  fetchFlightData();
});

app.listen(port);
console.log(`App running at port ${port}`);
