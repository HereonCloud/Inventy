import EmptyDataSection from "@/component/organisms/EmptyDataSection";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import { addProducts, getProducts } from "../server/productApi/productApi";
import { Product } from "@/src/entity/Product";
import ProductSection from "@/component/organisms/ProductSection";

const Home = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getAllProduct = () => {
    getProducts().then((p) => {
      setTotalProduct(p.productCount);
      setProducts(p.products);
    });
  };

  const onSubmitProduct = async (product: Omit<Product, "id">) => {
    const res = await addProducts(product);
    if (res.message) {
      getAllProduct();
      setIsOpen(false);
    } else {
      setError(res.error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <title>Add Product</title>
      <div className={styles.main} key={totalProduct}>
        {totalProduct === 0 && (
          <EmptyDataSection
            onSubmitAddProduct={onSubmitProduct}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            error={error}
            setError={setError}
          />
        )}
        {totalProduct > 0 && (
          <ProductSection
            setSearchQuery={setSearchQuery}
            error={error}
            setError={setError}
            products={
              !searchQuery
                ? products
                : products.filter((p) => (p.name = searchQuery))
            }
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            onSubmitAddProduct={onSubmitProduct}
          />
        )}
      </div>
    </>
  );
};

export default Home;
