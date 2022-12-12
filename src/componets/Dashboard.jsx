import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SideBar from './SideBar';

const Dashboard = () => {
    return (
        <div>
            <div>
                <div className='flex'>
                    <SideBar />
                    <div className='content w-100'>
                        <Navbar />
                        <div className="container mt-2">
                            <Outlet />
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Dashboard;
