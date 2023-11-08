import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
const dotenv = config();
const app = express();
const port = process.env.PORT || 5000;
const option = {
  origin: ["http://localhost:3000", "http://localhost:5001"],
};

app.use(bodyParser.json()); // To parse body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(option)); // Address cors error
app.use("/api/product", require("./server/productApi/productRoutes"));

app.listen(port, () => {
  console.log("Server is running at port: " + port);
});
