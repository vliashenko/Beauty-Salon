import React from 'react';
import PropTypes from "prop-types";
import styles from "./PriceLittleItem.module.css";

const PriceLittleItem = ({ item }) => {
    const { title, description, price } = item;
    return (
        <>
            <div className={styles.priceLittleItem}>
                <div className={styles.colFirst}>
                    <p className={styles.priceLittleTitle}>
                        { title }
                    </p>
                    <p className={styles.priceLittleDescription}>
                        { description }
                    </p>
                </div>
                <div className={styles.colSecond}>
                    <p className={styles.priceLittlePrice}>
                        { price } $
                    </p>
                </div>
            </div>
            <hr className={styles.styledHr} />
        </>
    );
};

PriceLittleItem.propTypes = {
    item : PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired 
    }) 
}

export default PriceLittleItem;