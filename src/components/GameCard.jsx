/* eslint-disable react/prop-types */
import styles from "../styles/GameCard.module.scss";
import { Link } from "react-router-dom";

const GameCard = (props) => {
  let item = props.item;
  let category = props.category;
  return (
    <section className={styles.cardContainer}>
      {category == "Movies" && (
        <>
          <img src={item.posterURL} alt="image" />
          <h2 className={styles.cardTitle}>{item.title}</h2>
        </>
      )}
      {category == "Games" && (
        <>
          <img src="PlayStation.jpg" alt="image" />
          <h2 className={styles.cardTitle}>{item.name}</h2>
          {(item.genre[0] && (
            <p className={styles.description}>Genre: {item.genre[0]}</p>
          )) || <p className={styles.description}>No Genre found</p>}
        </>
      )}
      {category == "Cartoons" && (
        <>
          <img src={item.image} alt="image" />
          <h2 className={styles.cardTitle}>{item.title}</h2>
        </>
      )}
      <Link to="/card" state={props}>
        <button className={styles.cardbtn}>See More</button>
      </Link>
    </section>
  );
};

export default GameCard;
