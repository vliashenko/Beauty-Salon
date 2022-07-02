import React from 'react';
import PriceListItem from '../PriceListItem/PriceListItem';
import data from "../../services/pricelist-data.json";
import styles from "./PriceList.module.css";

const PriceList = () => {
    return (
        <div className={styles.priceList}>
            <div className={styles.priceListTitle}>
                Ціни на послуги
            </div>

            <div className={styles.priceListContainer}>
                {data.map((item,i)=> {
                    return (
                        <PriceListItem key={i} item={item}/>
                    )
                })} 
            </div>
        </div>
    );
};

export default PriceList;