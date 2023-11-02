import { Product } from "@/src/entity/Product";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import AddButton from "../atoms/AddButton";
import AddProductModal from "../molecules/AddProductModal";
import styles from "./styles/ProductSection.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchBar from "../molecules/SearchBar";

interface Props {
  products: Product[];
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
  onSubmitAddProduct: (p: Omit<Product, "id">) => void;
  error: string;
  setError: (s: string) => void;
  setSearchQuery: (s: string) => void;
}

const ProductSection = (p: Props) => {
  const [currentProductId, setCurrentProductId] = useState<String>("");

  return (
    <section className={styles.section}>
      <div className={styles.buttonSection}>
        <SearchBar setSearchQuery={p.setSearchQuery} />
        <AddButton onClick={() => p.setIsOpen(true)}>Add Product</AddButton>
      </div>
      <TableContainer
        sx={{
          width: "100%",
        }}
      >
        <Table className={styles.table} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  position: "sticky",
                  left: 0,
                  zIndex: 9,
                }}
              >
                Product Name
              </TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {p.products.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => setCurrentProductId(row.id)}
              >
                <TableCell
                  sx={{
                    background: "#fff",
                    position: "sticky",
                    left: 0,
                    zIndex: 9,
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">{"₱" + row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right" width={"100px"}>
                  {<EditIcon />}
                </TableCell>
                <TableCell align="right" width={"30px"}>
                  {<DeleteIcon />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddProductModal
        isOpen={p.isOpen}
        setIsOpen={p.setIsOpen}
        onSubmit={p.onSubmitAddProduct}
        error={p.error}
        setError={p.setError}
      />
    </section>
  );
};

export default ProductSection;
