import React from 'react';
import Banner from '../Banner/Banner';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OurWorks from '../OurWorks/OurWorks';
import Partners from '../Partners/Partners';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Partners></Partners>
            <Services></Services>
            <OurWorks></OurWorks>
            <ClientsFeedback></ClientsFeedback>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;