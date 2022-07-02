import React from 'react';
import employeeImage from "../../resourses/img/employeeImage.png";
import PropTypes from "prop-types";
import styles from "./EmployeeItem.module.css";

const EmployeeItem = ({ name, profession }) => {
    return (
        <div className={ styles.employeeItem }>
            <div className={styles.employeeItemBorder }>
                <img src={employeeImage} alt="employee" className={ styles.employeeItemImage } />
            </div>

            <div className={ styles.employeeItemInfo }>
                <p className={ styles.employeeItemName }>
                    { name }
                </p>
                <p className={ styles.employeeItemPosition }>
                    { profession }
                </p>
            </div>
        </div>
    );
};

EmployeeItem.propTypes = {
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
}

export default EmployeeItem;