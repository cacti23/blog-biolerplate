const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/events", async (req, res) => {
  try {
    const event = req.body;

    await axios.post("http://localhost:4000/events", event); // post service
    await axios.post("http://localhost:4001/events", event); // comment service
    await axios.post("http://localhost:4002/events", event); // query service
    await axios.post("http://localhost:4003/events", event); // moderation service

    res.send({ status: "OK" });
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(4005, () => {
  console.log("Listening on port 4005");
});
