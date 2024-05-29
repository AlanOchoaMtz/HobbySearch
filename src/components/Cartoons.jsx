import { useState, useEffect } from "react";
import styles from "../styles/HomePage.module.scss";
import GameCard from "./GameCard";

const CartoonCategories = () => {
  const category = "cartoons2D";
  const [data, setData] = useState([]);
  const cartoonList = [];
  data.forEach((item, index) => {
    cartoonList.push(
      <li key={index}>
        <GameCard category="Cartoons" item={item}></GameCard>
      </li>
    );
  });

  useEffect(() => {
    fetch("https://api.sampleapis.com/cartoons/" + category)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <>
      <h1 className={styles.homepage}>Choose your Cartoon</h1>
      <section className={styles.homepage}>
        <ul className={styles.GameCard}>{cartoonList}</ul>
      </section>
    </>
  );
};

export default CartoonCategories;
