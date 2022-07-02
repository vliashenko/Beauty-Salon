import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../resourses/img/logoMain.png";
import styles from "../Header/Header.module.css"

const EmployeeHeader = () => {

    const [ sideMenu, setSideMenu ] = useState(false);

    const onClickHandler = () => {
        setSideMenu(sideMenu => !sideMenu)
    }

    const onCloseHandler = () => {
        setSideMenu(false)
    }

    return (
        <>
        <div id="mySidenav" style={ sideMenu === true ? {width: "250px"} : {width: "0"}} className={styles.sidenav}>
            <span className={styles.closebtn} onClick={onCloseHandler}>&times;</span>
            <p className={styles.sidenavLink}>
                <Link className={styles.link} to="/">
                    Головна
                </Link>
            </p>
            <p className={styles.sidenavLink}>
                <Link className={styles.link} to="/masters">
                    Майстри
                </Link>
            </p>
            <p className={styles.sidenavLink}>
            <Link className={styles.link} to="/pricelist">
                Ціни
            </Link>
            </p>
            <p className={styles.sidenavLink}>
                <Link className={styles.link} to="/contacts">
                    Контакти
                </Link>
            </p>
        </div>

        <header className={styles.EmployeeHeader}>
            <div className={styles.headerTopEmployee}>
            
            <Link className={styles.link} to="/">
                <img src={logo} alt="main-logo" className={styles.logoMainHidden} />
            </Link>
            
            <i onClick={onClickHandler} className={`fa-solid fa-bars-staggered ${styles.burger}`}></i>

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
        </>
    );
};

export default EmployeeHeader;