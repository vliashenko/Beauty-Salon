import React from 'react';
import styles from "./Partners.module.css";
import partner1 from "../../resourses/img/partner1.png"
import partner2 from "../../resourses/img/partner2.png"
import partner3 from "../../resourses/img/partner3.png"
import partner4 from "../../resourses/img/partner4.png"

const Partners = () => {
    return (
        <div className={styles.partners}>
            <div className={styles.partnersItem}>
                <img src={partner2} alt="partner" className={styles.partnersImage} />
            </div>
            <div className={styles.partnersItem}>
                <img src={partner1} alt="partner" className={styles.partnersImage} />
            </div>
            <div className={styles.partnersItem}>
                <img src={partner3} alt="partner" className={styles.partnersImage} />
            </div>
            <div className={styles.partnersItem}>
                <img src={partner4} alt="partner" className={styles.partnersImage} />
            </div>
        </div>
    );
};

export default Partners;