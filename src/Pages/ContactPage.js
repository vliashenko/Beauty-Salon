import React from 'react';
import EmployeeHeader from '../components/EmployeesHeader/EmployeesHeader';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';

const ContactPage = () => {
    return (
        <div>
            <EmployeeHeader/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default ContactPage;