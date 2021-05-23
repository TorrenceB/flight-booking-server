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

app.get("/", (req, res) => {
  res.send("<h1>Flight Booking API</h1>");
});

app.listen(port);
