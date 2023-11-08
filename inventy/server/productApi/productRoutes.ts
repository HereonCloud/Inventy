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
  const product = await AppDataSource.getRepository(Product).findAndCount({
    order: {
      name: "asc",
      unit: "asc",
    },
  });
  res.status(200).json({ products: product[0], productCount: product[1] });
});

router.route("/").post(async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Product);
  const inputProduct = await repo.findOne({
    where: {
      name: req.body.name,
      unit: req.body.unit,
    },
  });
  if (inputProduct) {
    res
      .status(400)
      .json({ error: "Product with the same unit already existing" });
  } else {
    await repo.save(req.body);
    res.status(200).json({ message: "Add product successful" });
  }
});

router.route("/").patch(async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Product);
  const inputProduct = await repo.findOne({
    where: {
      id: req.body.id,
    },
  });
  if (inputProduct) {
    const checkProduct = await repo.findOne({
      where: {
        name: req.body.name,
        unit: req.body.unit,
      },
    });

    if (!checkProduct) {
      repo.update(req.body.id, {
        name: req.body.name,
        price: req.body.price,
        unit: req.body.unit,
        quantity: req.body.quantity,
      });
      res.status(200).json({ message: "Edit product successful" });
    } else {
      res
        .status(400)
        .json({ error: "Product with the same unit already existing" });
    }
  }
});

router.route("/").delete(async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Product);
  const product = await repo.findOne({
    where: {
      id: req.body.id,
    },
  });

  if (!product) {
    res.status(400).json({ error: "Product does not exist" });
  } else {
    await repo.delete({ id: req.body.id });
    res.status(200).json({ error: "Product deleted" });
  }
});

module.exports = router;
