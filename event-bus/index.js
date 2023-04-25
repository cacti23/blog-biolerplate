const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/events", (req, res) => {
  try {
    const event = req.body;

    axios.post("http://localhost:4000/events", event);
    axios.post("http://localhost:4001/events", event);
    axios.post("http://localhost:4002/events", event);

    res.send({ status: "OK" });
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(4005, () => {
  console.log("Listening on port 4005");
});
