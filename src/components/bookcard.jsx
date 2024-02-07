import React, { useState } from "react";
import styles from "./bookcard.module.css";
import { AiFillHeart } from "react-icons/ai";
const BookCard = ({ book, favorite, setFavorite }) => {
  const [like, setLike] = useState(false);
  const { author, language, title, pages, image, id } = book;

  const favoritehandler = (book) => {
    setLike((like) => !like);
    if (!like) {
      setFavorite((favorite) => [...favorite, book]);
    } else {
      const newArrayBook = favorite.filter((i) => i.id !== book.id);
      setFavorite(newArrayBook);
    }
  };

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.detiles}>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>

      <button
        style={{
          color: like ? "red" : "#e0e0e0",
        }}
        onClick={() => favoritehandler(book)}
      >
        <AiFillHeart />
      </button>
    </div>
  );
};

export default BookCard;
