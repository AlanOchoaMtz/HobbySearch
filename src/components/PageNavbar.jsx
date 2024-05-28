import { useState } from "react";

import styles from "../styles/PageNavbar.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-router-dom";

const PageNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Game List Favorites!!!</span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <div className={styles.nav__item}>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </div>
            <div className={styles.nav__item}>
              <Link className={styles.link} to="/videogames">
                Videogames
              </Link>
            </div>
            <div className={styles.nav__item}>
              <Link className={styles.link} to="/movies">
                Movies
              </Link>
            </div>
            <div className={styles.nav__item}>
              <Link className={styles.link} to="/cartoons">
                Cartoons
              </Link>
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button />
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNavbar;
