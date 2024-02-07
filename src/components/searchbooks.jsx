import React, { useEffect, useState } from "react";
import styles from "./searchbook.module.css";
import { IoSearch } from "react-icons/io5";
import { books } from "../constants/mockData";

const SerachBooks = ({ setFilterdata, search, setSearch }) => {
 
  const clickhandler = () => {
    if (search) {
      const filteritem = books.filter((book) =>
        book.title.toLowerCase().includes(search)
      );

      setFilterdata(filteritem);
    } else {
      setFilterdata(books);
    }
  };

  return (
    <div className={styles.serach}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Tittle"
      />
      <button onClick={clickhandler}>
        <IoSearch />
      </button>
    </div>
  );
};

export default SerachBooks;
