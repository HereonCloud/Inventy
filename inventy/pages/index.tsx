import EmptyDataSection from "@/component/molecules/EmptyDataSection";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import { addProducts, getProducts } from "../server/productApi/productApi";
import { Product } from "@/src/entity/Product";

const Home = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmitProduct = (product: Omit<Product, "id">) => {
    addProducts(product);
    getProducts().then((p) => {
      setTotalProduct(p.productCount);
    });
    setIsOpen(false);
  };

  useEffect(() => {
    getProducts().then((p) => {
      setTotalProduct(p.productCount);
    });
  }, []);

  return (
    <>
      <title>Add Product</title>
      <div className={styles.main}>
        {totalProduct === 0 && (
          <EmptyDataSection
            onSubmitAddProduct={onSubmitProduct}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </>
  );
};

export default Home;
