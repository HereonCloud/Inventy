import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    console.log("Data source has been initialize");
  })
  .catch((error) => console.log(error));
