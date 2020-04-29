const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const config = require("config");
const db = config.get("mongoURI");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Mongo connected...."))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());

//set up routes
app.use("/users", require("./routes/userRouter"));

app.listen(PORT, () => {
  console.log(`Server is running on my favourite port ${PORT}`);
});
