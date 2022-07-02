import React from 'react';
import priceListImage from "../../resourses/img/priceList.png";
import PriceLittleItem from '../PriceLittleItem/PriceLittleItem';
import styles from "./PriceListItem.module.css";

const PriceListItem = ({ item }) => {
    const { hairstyle } = item;
    const { prices } = hairstyle;
    return (
        <div className={styles.priceListItem}>
            <div className={styles.priceListItemFirst}>
                <img src={priceListImage} alt="priceListImage" className={styles.priceListItemImage} />
            </div>
            <div className={styles.priceListItemSecond}>
                {
                    prices.map((item,i) => {
                        return (
                            <PriceLittleItem key={i} item={item}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PriceListItem;