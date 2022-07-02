import React, { Component } from 'react';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import data from "../../services/data.json"
import styles from "./EmployeesList.module.css";


class EmployeesList extends Component  {

    state = {
        data
    }

    render() {
        const { data } = this.state;
        return (
            <div className = { styles.employeeList }>
                <div className = { styles.employeeListTitle }>
                    Наші майстрині
                </div>
                <div className = { styles.employeeListContainer }>
                    { data.data.map(item => {
                        const { _id, ...props } = item;
                        return (
                            <EmployeeItem key={item._id} {...props}/>
                        )
                    }) }
                </div>
            </div>
        );
    }
};

export default EmployeesList;