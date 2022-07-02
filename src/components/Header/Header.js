import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../resourses/img/logoMain.png";
import mouse from "../../resourses/img/mouseHeaderMain.png"
import styles from "./Header.module.css";

const Header = () => {

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

            <header className={styles.header}>
                <div className={styles.headerTop}>
                
                <img src={logo} alt="main-logo" className={styles.logoMainHidden} />
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
        </>
    );
};

export default Header;