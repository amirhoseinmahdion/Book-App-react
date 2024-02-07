import React from "react";
import styles from "./favorite.module.css";
import FavoriteCard from "./favorite-card";

const Favorite = ({ favorite }) => {
  return (
    <div className={styles.container}>
      <h2>Favorites</h2>
      {favorite.map((item) => (
        <FavoriteCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Favorite;
