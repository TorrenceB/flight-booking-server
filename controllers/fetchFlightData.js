const axios = require("axios").default;

const fetchFlightData = async ({ endpoint, params }) => {
  const baseURL =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices";

  const options = {
    method: "GET",
    url: `${baseURL}${endpoint}`,
    params: params,
    headers: {
      "x-rapidapi-key": "069dfdaf8bmshbf72b4525dae034p10dc6ejsn27b330717476",
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    },
  };

  const apiInstance = await axios
    .request(options)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return apiInstance;
};

module.exports = fetchFlightData;
