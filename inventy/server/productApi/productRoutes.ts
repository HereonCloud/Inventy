import express, { Request, Response } from "express";
import { AppDataSource } from "./../../src/data-source";
import { Product } from "./../../src/entity/Product";

const router = express.Router();

AppDataSource.initialize()
  .then(async () => {
    console.log("Data source has been initialize");
  })
  .catch((error) => console.log(error));

router.route("/").get(async (req: Request, res: Response) => {
  const product = await AppDataSource.getRepository(Product).findAndCount();
  res.status(200).json({ products: product[0], productCount: product[1] });
});

router.route("/").post(async (req: Request, res: Response) => {
  AppDataSource.getRepository(Product).save(req.body);
  res.status(200).json({ message: "Add product successful" });
});

module.exports = router;
