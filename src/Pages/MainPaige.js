import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Quote from '../components/Quote/Quote';
import Categories from '../components/Categories/Categories';
import Partners from '../components/Partners/Partners';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';

class MainPaige extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Quote/>
                <Categories/>
                <Partners/>
                <Gallery/>
                <Footer/>
            </div>
        );
    }
}

export default MainPaige;