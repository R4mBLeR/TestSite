import React from "react";
import styles from "./HomePage.module.css";
import bannerImg from "../../assets/banner.png";
import productPhoto from "../../assets/product_photo.png";
import Product from "../../components/common/Product/Product";
import Banner from "../../components/common/Banner/Banner";

const HomePage = () => {
  const renderProducts = () => {
    const products = [];
    for (let i = 1; i <= 5; i++) {
      products.push(
        <Product
          name="Смартфон iPhone 15 Pro Max 256GB"
          price={599.99}
          imageUrl={productPhoto}
          stock={7}
          rating={4.8}
          reviewCount={324}
          discount={15}
        />
      );
    }
    return products;
  };
  return (
    <div className={styles.mainPage}>
      <Banner img={bannerImg} />
      <div className={styles.mainPageTitles}>
        <div className={styles.mainPageProductsTitle}>New Products</div>
        <div className={styles.mainPageNewProductsTitle}>
          <a href="/">See all New Products</a>
        </div>
      </div>
      <grid className={styles.productsGrid}>{renderProducts()}</grid>
    </div>
  );
};

export default HomePage;
