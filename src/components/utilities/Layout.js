import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
const Layout = (props) => {
    return (
        <>
            <Navbar />
            {props.main}
            {props.about}
            {props.portfolio}
            {props.contact}
            <Footer />
        </>
    );
}

export default Layout;
