import { AppDataSource } from "./data-source";
import { Product } from "./entity/Product";

AppDataSource.initialize()
  .then(async () => {
    console.log("Data source has been initialize");
  })
  .catch((error) => console.log(error));
