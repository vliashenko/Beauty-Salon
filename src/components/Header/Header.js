import React from 'react';
import logo from "../../resourses/img/logoMain.png";
import mouse from "../../resourses/img/mouseHeaderMain.png"
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <ul className={styles.headerTopList}>
                    <li className={styles.headerTopListItem}>
                        Головна
                    </li>
                    <li className={styles.headerTopListItem}>
                        Майстри
                    </li>
                    <li className={styles.headerTopListItem}>
                        Косметика
                    </li>
                    <li className={styles.headerTopListItem}>
                        <img src={logo} alt="main-logo" className={styles.logoMain} />
                    </li>
                    <li className={styles.headerTopListItem}>
                        Акції
                    </li>
                    <li className={styles.headerTopListItem}>
                        Відгуки
                    </li>
                    <li className={styles.headerTopListItem}>
                        Контакти
                    </li>
                </ul>
            </div>

            <div className={styles.headerCenter}>
                <p className={styles.headerCenterItem}>
                    Салон краси 
                </p>
                <p className={styles.headerCenterItem}>
                    «Dilighna-beauty» 
                </p>
                <p className={styles.headerCenterItem}>
                    на Київській 
                </p>
            </div>

            <div className={styles.headerBottom}>
                <img src={mouse} alt="mouse" className={styles.headerBottomMouse} />
                <span className={styles.headerBottomLabel}>Прокрутити вниз</span>
            </div>
        </header>
    );
};

export default Header;