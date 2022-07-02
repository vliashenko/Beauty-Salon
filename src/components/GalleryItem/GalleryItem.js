import React from 'react';
import PropTypes from "prop-types";
import styles from "./GalleryItem.module.css"

const GalleryItem = ({ url, category }) => {
    return (
        <div className={styles.galleryitem}>
            <img src={url} alt={category} className={styles.galleryItemImage} />
        </div>
    );
};

GalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default GalleryItem;