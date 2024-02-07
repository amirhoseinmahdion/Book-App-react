import React, { useState } from "react";
import BookCard from "./bookcard";
import { books } from "../constants/mockData";
import Favorite from "./favorite";

const HomePage = ({ filterdata ,search}) => {
  console.log(search,filterdata);
  const [favorite, setFavorite] = useState([]);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: favorite.length ? "70%" : "100%" }}>
        {filterdata.length
          ? filterdata.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                favorite={favorite}
                setFavorite={setFavorite}
              />
            ))
          : books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                favorite={favorite}
                setFavorite={setFavorite}
              />
            ))}
      </div>
      <div>{!!favorite.length && <Favorite favorite={favorite} />}</div>
    </div>
  );
};

export default HomePage;
