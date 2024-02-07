import React from "react";
import styles from "./favorite.module.css";
const FavoriteCard = ({ item }) => {
  return (
    <div className={styles.cardfavorite}>
      <img src={item.image} alt={item.title} />
      <span>{item.title}</span>
    </div>
  );
};

export default FavoriteCard;
