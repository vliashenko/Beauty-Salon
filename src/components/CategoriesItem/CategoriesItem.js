import React from 'react';
import PropTypes from "prop-types";
import styles from "./CategoriesItem.module.css"

const CategoriesItem = ({ url, title }) => {
    return (
        <div className={styles.categoriesItem}>
            <div className={styles.categoriesItemBorder}>
                <div className={styles.categoriesItemContainer}>
                    <img src={url} alt="category" className={styles.categoriesItemImage} />
                </div>
            </div>

            <div className={styles.categoriesItemText}>
                {title}
            </div>
        </div>
    );
};

CategoriesItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default CategoriesItem;