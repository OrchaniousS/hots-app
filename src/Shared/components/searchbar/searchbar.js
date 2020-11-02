import React, { useEffect, useState } from "react";

import data from "../../../Heroes/data/heroData.json";
import mapData from "../../../Maps/data/hotsMaps.json";
import styles from "./searchbar.module.css";

const SearchBar = () => {
  const [filterBarTerm, setFilterBarTerm] = useState("");
  const [searchBarResults, setSearchBarResults] = useState([]);

  const filterHandler = (event) => {
    setFilterBarTerm(event.target.value);
  };

  useEffect(() => {
    const filterResults = data.filter((item, i) =>
      Array.from(item.name.toLowerCase()).toString()[0] ===
      Array.from(filterBarTerm.toLowerCase()).toString()[0]
        ? item.name.toLowerCase().includes(filterBarTerm.toLowerCase())
        : null
    );

    console.log(mapData.map((item) => item.mName));
    const filterResultsMaps = mapData.filter((item, i) =>
      Array.from(item.mName.toLowerCase()).toString()[0] ===
      Array.from(filterBarTerm.toLowerCase()).toString()[0]
        ? item.mName.toLowerCase().includes(filterBarTerm.toLowerCase())
        : null
    );
    setSearchBarResults(filterResults && filterResultsMaps);
    // console.log(searchBarResults);
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
                  href={
                    item.name ? `/heroes/${item.name}` : `/maps/${item.mName}`
                  }
                >
                  <div className={styles.searchResultImg}>
                    <img alt={item.logo} src={item.logo} />
                  </div>
                  <div className={styles.searchResultName}>
                    {item.name && item.name + " "}
                    {item.mName && item.mName + " "}
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
