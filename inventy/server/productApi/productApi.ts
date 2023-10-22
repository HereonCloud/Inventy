import { Product } from "@/src/entity/Product";

export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:5001/api/product", {
      method: "GET",
      headers: {
        "content-type":
          "application/json;charset=UTF-8, application/x-www-form-urlencoded",
      },
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addProducts = async (request: Omit<Product, "id">) => {
  try {
    const response = await fetch("http://localhost:5001/api/product", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(request),
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
