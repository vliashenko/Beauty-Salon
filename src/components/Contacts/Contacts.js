import React from 'react';
import map from "../../resourses/img/map.png";
import styles from "./Contacts.module.css"

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.colOne}>
                <p className={styles.title}>
                    Контакти
                </p>
                <p className={styles.titleItem}>
                    +380-68-84-85-643
                </p>
                <p className={styles.titleItem}>
                    +380-68-84-85-643
                </p>
                <p className={styles.titleItem}>
                    Визвільний проспект, будинок 5, кв.104
                </p>

                <p style={{marginTop: "60px"}} className={styles.title}>
                    Години роботи
                </p>
                <p className={styles.titleItem}>
                    З 10:00 до 21:00 (Пн-Пт)
                </p>
                <p className={styles.titleItem}>
                    З 11:00 до 20:00 (Сб-Нд)
                </p>
            </div>
            
            <div className={styles.colTwo}>
                <img src={map} alt="map" className={styles.contactsImage}/>
            </div>
        </div>
    );
};

export default Contacts;