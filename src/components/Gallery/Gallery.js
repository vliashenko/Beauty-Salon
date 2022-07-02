import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import galleryImg1 from "../../resourses/img/gallery1.png";
import galleryImg2 from "../../resourses/img/gallery2.png";
import galleryImg3 from "../../resourses/img/gallery3.png";
import galleryImg4 from "../../resourses/img/gallery4.png";
import galleryImg5 from "../../resourses/img/gallery5.png";
import galleryImg6 from "../../resourses/img/gallery6.png";
import galleryImg7 from "../../resourses/img/gallery7.png";
import galleryImg8 from "../../resourses/img/gallery8.png";
import galleryImg9 from "../../resourses/img/gallery9.png";
import styles from "./Gallery.module.css";

class Gallery extends Component {

    state = {
        data: [
            { 
                id: "01jas1DD",
                url: galleryImg1,
                category: "eyelashes"
            },
            { 
                id: "02bgs1DD",
                url: galleryImg2,
                category: "eyelashes"
            },
            { 
                id: "03qres1DD",
                url: galleryImg3,
                category: "manicure"
            },
            { 
                id: "04jlLkDD",
                url: galleryImg4,
                category: "eyelashes"
            },
            { 
                id: "05jJJ1DD",
                url: galleryImg5,
                category: "hairdo"
            },
            { 
                id: "06gDf1DD",
                url: galleryImg6,
                category: "hairdo"
            },
            { 
                id: "07DVC1DD",
                url: galleryImg7,
                category: "manicure"
            },
            { 
                id: "08jnu1DD",
                url: galleryImg8,
                category: "hairdo"
            },
            { 
                id: "09jdr1DD",
                url: galleryImg9,
                category: "hairdo"
            }
        ]
    }

    render() {
        return (
            <div className={styles.gallery}>
                <div className={styles.galleryTitle}>
                    Наші роботи
                </div>

                <div className={styles.galleryFilters}>
                    <ul className={styles.galleryFiltersList}>
                        <li className={styles.galleryFiltersListItem}>
                            Всі роботи
                        </li>
                        <li className={styles.galleryFiltersListItem}>
                            Послуги перукаря
                        </li>
                        <li className={styles.galleryFiltersListItem}>
                            Манікюр
                        </li>
                    </ul>
                </div>

                <div className={styles.galleryList}>
                    {this.state.data.map((item) => {
                        return (
                            <GalleryItem key={item.id} category={item.category} url={item.url}/>
                        )
                    })}
                </div>
            </div>
        );
    }
};

export default Gallery;