import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';


const DashboardLayout: FC = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default DashboardLayout;
