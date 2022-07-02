import React from 'react';
import logo from "../../resourses/img/logoMain.png";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <hr className={styles.styledHr}/>
                <div className={styles.footerContainer}>
                    <div className={styles.footerColFirst}>
                        <img src={logo} alt="logo" className={styles.footerColFirstLogo} />
                        <p className={styles.footerColFirstInfo}>
                            There are many variations of passages of Lorem Ipsum aviable, but
                            the majority have suffered alteration in some form.
                        </p>
                    </div>
                    <div className={styles.footerColSecond}>
                        <ul className={styles.footerColList}>
                            <li className={styles.footerColTitle}>
                                Контакти
                            </li>
                            <li className={styles.footerColItem}>
                                <a className={styles.mobile} href="tel:+380688485643">+38-068-84-85-643</a>
                            </li>
                            <li className={styles.footerColItem}>
                                <a className={styles.mobile} href="tel:+380688485643">+38-068-84-85-643</a>
                            </li>
                            <li className={styles.footerColItem}>
                                Визвільний проспект, будинок 5, кв.104
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerColThird}>
                        <ul className={styles.footerColList}>
                            <li className={styles.footerColTitle}>
                                Режим роботи
                            </li>
                            <li className={styles.footerColItem}>
                                З 10:00 до 21:00 (Пн-Пт)
                            </li>
                            <li className={styles.footerColItem}>
                                З 11:00 до 20:00 (Сб-Нд)
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerColFourth}>
                    <ul className={styles.footerColList}>
                            <li className={styles.footerColTitle}>
                                Ми у соціальних мережах
                            </li>
                            <li className={styles.footerColItem}>
                                <i style={{fontSize: 30}} className="fa-brands fa-instagram"></i>
                                <span className={styles.iconInfo}>
                                    instagram/link
                                </span>
                            </li>
                            <li className={styles.footerColItem}>
                                <i style={{fontSize: 30}} className="fa-brands fa-linkedin"></i>
                                <span className={styles.iconInfo}>
                                    linkedin/link
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            <hr className={styles.styledHr}/>
                <p className={styles.copyright}>All rights reserved&copy;</p>
        </div>
    );
};

export default Footer;