/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import styles from "../styles/GameCard.module.scss";

const SingleCard = () => {
  const location = useLocation();
  const { item, category } = location.state;
  console.log(item);
  return (
    <section>
      {category == "Movies" && (
        <div className={styles.cardContainerLarge}>
          <img width={300} height={400} src={item.posterURL} alt="image" />
          <h2 className={styles.cardTitle}>{item.title}</h2>
        </div>
      )}
      {category == "Games" && (
        <div className={styles.cardContainerLarge}>
          <img width={300} height={300} src="PlayStation.jpg" alt="image" />
          <div className={styles.cardContainer}>
            <h2 className={styles.cardTitle}>{item.name}</h2>
            {(item.genre[0] && (
              <p className={styles.description}>
                <strong>Genre:</strong> {item.genre[0]}
              </p>
            )) || (
              <p className={styles.description}>
                <strong>No Genre found</strong>
              </p>
            )}
            <p className={styles.description}>
              <strong>Publisher:</strong> {item.publishers[0]}
            </p>
            <p className={styles.description}>
              <strong>Release Date in North America:</strong>{" "}
              {item.releaseDates.NorthAmerica}
            </p>
          </div>
        </div>
      )}
      {category == "Cartoons" && (
        <div className={styles.cardContainerLarge}>
          <img width={300} height={400} src={item.image} alt="image" />
          <div className={styles.cardContainer}>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.description}>
              <strong>Creator:</strong> {item.creator[0]}
            </p>
            <p className={styles.description}>
              <strong>Genre:</strong> {item.genre[0]}
            </p>
            <p className={styles.description}>
              <strong>Rating:</strong> {item.rating}
            </p>
            <p className={styles.description}>
              <strong>Year:</strong> {item.year}
            </p>
            <p className={styles.description}>
              <strong>Runtime in {item.runtime_in_minutes} minutes </strong>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleCard;
