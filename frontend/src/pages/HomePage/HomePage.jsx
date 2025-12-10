import React from "react";
import styles from "./HomePage.module.css";
import Banner from "../../components/common/Banner";
import bannerImg from "./banner.png";

const HomePage = () => {
  return (
    <div className={styles.mainPage}>
      <Banner img={bannerImg} />
      <div className={styles.mainPageTitles}>
        <div className={styles.mainPageProductsTitle}>New Products</div>
        <div className={styles.mainPageNewProductsTitles}>
          <a href="/">See all New Products</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
