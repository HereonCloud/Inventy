import { Search } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./styles/SearchBar.module.scss";

interface Props {
  setSearchQuery: (e: any) => void;
}

const SearchBar = (p: Props) => {
  const [query, setQuery] = useState("");

  return (
    <form className={styles.form}>
      <TextField
        id="search-bar"
        className={styles.searchBar}
        onInput={(e) => {
          setQuery((e.target as HTMLInputElement).value);
        }}
        label="Enter a product name"
        variant="outlined"
        placeholder="Search..."
      />
      <Button
        type="submit"
        aria-label="search"
        onClick={() => p.setSearchQuery(query)}
      >
        <Search style={{ fill: "#6fb3b8" }} />
      </Button>
    </form>
  );
};

export default SearchBar;
