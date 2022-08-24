import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const [searchInput, setSeachInput] = useState("");

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("timeout running");
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [searchInput]);

  const onChangeHandler = (event) => {
    setSeachInput(event.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <TextField
        onChange={onChangeHandler}
        label="searchInput"
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default SearchInput;
