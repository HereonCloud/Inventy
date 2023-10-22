import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
const dotenv = config();
const app = express();

const option = {
  origin: ["http://localhost:3000", "http://localhost:5001"],
};

const jsonParser = bodyParser.json();

const port = process.env.PORT || 5000;
app.use(cors(option)); // Address cors error
app.use(jsonParser); // To parse body
app.use("/api/product", require("./server/productApi/productRoutes"));

app.listen(port, () => {
  console.log("Server is running at port: " + port);
});
