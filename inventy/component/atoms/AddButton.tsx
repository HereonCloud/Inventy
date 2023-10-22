import { Button } from "@mui/material";
import { ReactNode } from "react";
import styles from "./styles/AddButton.module.scss";

interface AddButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

const AddButton = (p: AddButtonProps) => {
  return (
    <Button onClick={p.onClick} className={styles.button}>
      {p.children}
    </Button>
  );
};

export default AddButton;
