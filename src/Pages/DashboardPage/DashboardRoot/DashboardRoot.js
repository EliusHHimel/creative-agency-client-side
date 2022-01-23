import React, { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import logo from "../../../images/logos/logo.png";

const DashboardRoot = () => {
    const { user } = useFirebase();
    const location = useLocation();
    let routeName = 'Dashboard';

    if (location.pathname === '/dashboard/addService') {
        routeName = 'Add Services';
    }
    else if (location.pathname === '/dashboard') {
        routeName = 'Dashboard';
    }
    else if (location.pathname === '/dashboard/serviceList') {
        routeName = 'Services List';
    }
    else if (location.pathname === '/dashboard/orderList') {
        routeName = 'Orders List';
    }
    else if (location.pathname === '/dashboard/makeAdmin') {
        routeName = 'Make Admin';
    }

    useEffect(() => {
        document.title = `${routeName} | Creative Agency`;
    }, [routeName]);

    return (
        <>
            <div>
                <div className='lg:flex justify-between p-3'>
                    <div>
                        <Link to='/'> <img className='w-4/12' src={logo} alt="" /></Link>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-right'>{routeName}</h1>
                    </div>
                    <div>
                        <h1 className='text-xl text-right'><i className="fas fa-user-circle"></i> {user.displayName}</h1>
                    </div>
                </div>
                <div className='lg:flex mx-4'>
                    <div className='text-left mt-5 flex flex-col'>
                        <NavLink to='/dashboard'><i className="fas fa-tachometer-alt"></i> Dashboard</NavLink>
                        <NavLink className='mt-4' activeStyle={{}} to='/dashboard/orderList'><i className="fas fa-tags"></i> Order List</NavLink>
                        <NavLink className='mt-4' activeStyle={{}} to='/dashboard/serviceList'><i className="fas fa-list"></i> Services List</NavLink>
                        <NavLink className='mt-4' activeStyle={{}} to='/dashboard/addService'><i className="fas fa-plus"></i> Add Service</NavLink>
                        <NavLink className='mt-4' activeStyle={{}} to='/dashboard/makeAdmin'><i className="fas fa-user-plus"></i> Make Admin</NavLink>
                    </div>
                    <div className='mt-5 ml-5 lg:ml-20 dashboard-bg p-5'>
                        <Outlet />
                    </div>

                </div>
            </div>
        </>
    );
};

export default DashboardRoot;