import React, { Component } from 'react';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import styles from "./Categories.module.css";
import categoriesImage1 from "../../resourses/img/categories1.png";
import categoriesImage2 from "../../resourses/img/categories2.png";
import categoriesImage3 from "../../resourses/img/categories3.png";
import categoriesImage4 from "../../resourses/img/categories4.png";
import categoriesImage5 from "../../resourses/img/categories5.png";
import categoriesImage6 from "../../resourses/img/categories6.png";






class Categories extends Component {

    state = {
        data: [
            {
                "id": "011asRRG",
                "url": categoriesImage1,
                "title": "Послуги перукаря"
            }, 
            {
                "id": "012xsRRG",
                "url": categoriesImage2,
                "title": "Манікюр"
            },
            {
                "id": "013hasRRG",
                "url": categoriesImage3,
                "title": "Педікюр"
            },
            {
                "id": "014anRBBG",
                "url": categoriesImage4,
                "title": "Косметологія"
            },
            {
                "id": "015UkRRG",
                "url": categoriesImage5,
                "title": "Естетист по тілу"
            },
            {
                "id": "016LaDRG",
                "url": categoriesImage6,
                "title": "Візаж"
            }
        ]
    }

    render() {
        return (
            <div className={styles.categories}>
                {this.state.data.map((item) => {
                    return (
                        <CategoriesItem title={item.title} key={item.id} url={item.url}/>
                    )
                })}
            </div>
        );
    }
};

export default Categories;