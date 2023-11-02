import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

import styles from "./styles/CustomNavbar.module.scss";

const CustomNavbar = () => {
  return (
    <header>
      <AppBar className={styles.navbar} position="fixed">
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            sx={{ flexGrow: 1, fontSize: "36px" }}
          >
            Inventy
          </Typography>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Inventory</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default CustomNavbar;
