// src/index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const transactionsRoutes = require("./routes/transactions");
const summaryRoutes = require("./routes/summary");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/transactions", transactionsRoutes);
app.use("/summary", summaryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
