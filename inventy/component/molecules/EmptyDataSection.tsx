import { Typography } from "@mui/material";
import { useState } from "react";
import image from "../../public/emptyData.svg";
import AddButton from "../atoms/AddButton";
import AddProductModal from "./AddProductModal";
import styles from "./styles/EmptyDataSection.module.scss";
import React from "react";
import Image from "next/image";
import { Product } from "@/src/entity/Product";

interface Props {
  onSubmitAddProduct: (p: Omit<Product, "id">) => void;
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
}

const EmptyDataSection = (p: Props) => {
  return (
    <div className={styles.section}>
      <Image src={image} alt="No Data" />
      <Typography className={styles.text} color={"primary"}>
        No Products Yet
      </Typography>
      <AddButton onClick={() => p.setIsOpen(true)}>Add Product</AddButton>
      <AddProductModal
        isOpen={p.isOpen}
        setIsOpen={p.setIsOpen}
        onSubmit={p.onSubmitAddProduct}
      />
    </div>
  );
};

export default EmptyDataSection;
