import React from 'react';
import EmployeesHeader from '../components/EmployeesHeader/EmployeesHeader';
import Footer from '../components/Footer/Footer';
import EmployeesList from "../components/EmployeesList/EmployeesList";

const EmployeesPage = () => {
    return (
        <div>
            <EmployeesHeader/>
            <EmployeesList/>
            <Footer/>
        </div>
    );
};

export default EmployeesPage;