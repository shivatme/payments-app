const express = require("express");
var cors = require("cors");
require("dotenv").config();

const rootRouter = require("./routes/index");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
