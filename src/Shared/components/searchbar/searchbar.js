import React, { useEffect, useState } from "react";

import data from "../../../Heroes/data/heroData.json";
import styles from "./searchbar.module.css";

const SearchBar = () => {
  const [filterBarTerm, setFilterBarTerm] = useState("");
  const [searchBarResults, setSearchBarResults] = useState([]);

  const filterHandler = (event) => {
    setFilterBarTerm(event.target.value);
  };

  useEffect(() => {
    const filterResults = data.filter((item) =>
      item.name.toLowerCase().includes(filterBarTerm.toLowerCase())
    );
    setSearchBarResults(filterResults);
  }, [filterBarTerm]);

  return (
    <>
      <div className={styles.searchFilter}>
        <div className={styles.inputContainer}>
          <div>
            <span aria-label="Search" role="img">
              🔍
            </span>
          </div>
          <input
            className={styles}
            placeholder="Search"
            value={filterBarTerm}
            onChange={filterHandler}
          />
        </div>
        <div className={styles.resultsContainer}>
          {filterBarTerm === "" ? null : (
            <div className={styles.searchResults}>
              {searchBarResults.map((item, i) => (
                <a
                  key={i}
                  className={styles.searchResult}
                  href={`/heroes/${item.name}`}
                >
                  <div className={styles.searchResultImg}>
                    <img alt={item.logo} src={item.logo} />
                  </div>
                  <div className={styles.searchResultName}>
                    {item.name + " "}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
