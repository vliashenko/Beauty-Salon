import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../resourses/img/logoMain.png";
import styles from "../Header/Header.module.css"

const EmployeeHeader = () => {
    return (
        <header className={styles.EmployeeHeader}>
            <div className={styles.headerTopEmployee}>
            
            <img src={logo} alt="main-logo" className={styles.logoMainHidden} />
            <i className={`fa-solid fa-bars-staggered ${styles.burger}`}></i>

                <ul className={styles.headerTopList}>
                    <li className={styles.headerTopListItem}>
                        <Link className={styles.link} to="/">
                            Головна
                        </Link>
                    </li>
                    <li className={styles.headerTopListItem}>
                        <Link className={styles.link} to="/masters">
                            Майстри
                        </Link>
                    </li>
                    <li >
                    <Link className={styles.link} to="/">
                            <img src={logo} alt="main-logo" className={styles.logoMain} />
                        </Link>
                    </li>
                    <li className={styles.headerTopListItem}>
                        <Link className={styles.link} to="/pricelist">
                            Ціни
                        </Link>
                    </li>
                    <li className={styles.headerTopListItem}>
                        <Link className={styles.link} to="/contacts">
                            Контакти
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default EmployeeHeader;