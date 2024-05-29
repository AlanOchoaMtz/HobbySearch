import { useState, useEffect } from "react";
import styles from "../styles/HomePage.module.scss";
import GameCard from "./GameCard";

const MovieCategories = () => {
  const category = "drama";
  const [data, setData] = useState([]);
  const movieList = [];
  data.forEach((item, index) => {
    movieList.push(
      <li key={index}>
        <GameCard category="Movies" item={item}></GameCard>
      </li>
    );
  });

  useEffect(() => {
    fetch("https://api.sampleapis.com/movies/" + category)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <>
      <h1 className={styles.homepage}>Choose your Movie</h1>
      <section className={styles.homepage}>
        <ul className={styles.GameCard}>{movieList}</ul>
      </section>
    </>
  );
};

export default MovieCategories;
