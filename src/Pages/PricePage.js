import React from 'react';
import EmployeesHeader from "../components/EmployeesHeader/EmployeesHeader";
import PriceList from '../components/PriceList/PriceList';
import Footer from "../components/Footer/Footer";

const PricePage = () => {
    return (
        <div>
            <EmployeesHeader/>
            <PriceList/>
            <Footer/>
        </div>
    );
};

export default PricePage;