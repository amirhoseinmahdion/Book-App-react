import React from "react";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.header}>
        <h1>Book App</h1>
        <div>
          <p>
            <span>amirmahdion </span> | React.js Full Course
          </p>
        </div>
      </div>
      {children}
      <div className={styles.footer}>developed by amirhosein-mahdion</div>
    </>
  );
};

export default Layout;
