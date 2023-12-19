import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';


const DashboardLayout: React.FC = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default DashboardLayout;
