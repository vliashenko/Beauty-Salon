import React from 'react';
import image from "../../resourses/img/quoteMain.png";
import styles from "./Quote.module.css";

const Quote = () => {
    return (
        <div className={styles.quote}>
            <div className={styles.quoteImageContainer}>
                <img src={image} alt="quote" className={styles.quoteImage} />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.textContainerItemTop}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis.
                </p>
                <p className={styles.textContainerItemBottom}>
                    Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.
                </p>
            </div>
        </div>
    );
};

export default Quote;