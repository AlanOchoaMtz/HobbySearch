import { useEffect, useState } from "react";
import styles from "../styles/HomePage.module.scss";
import GameCard from "./GameCard";

const HomePage = () => {
  const category = "switch/games/";
  const [data, setData] = useState([]);
  const gameList = [];
  data.forEach((item, index) => {
    gameList.push(
      <li key={index}>
        <GameCard category="Games" item={item}></GameCard>
      </li>
    );
  });

  useEffect(() => {
    fetch("https://api.sampleapis.com/" + category)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <>
      <h1 className={styles.homepage}>Choose your Game</h1>
      <section className={styles.homepage}>
        <ul className={styles.GameCard}>{gameList}</ul>
      </section>
      <h1>Footer</h1>
    </>
  );
};

export default HomePage;
