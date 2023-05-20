import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


const Main = () => {
    return (
        <div className='mb-28 lg:mb-12'>
            <Header></Header>
            <Outlet></Outlet>
            <div className='fixed bottom-0 w-full'><Footer></Footer></div>
        </div>
    );
};

export default Main;