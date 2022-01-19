import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import logo from "../../../images/logos/logo.png";
import AddServices from '../AdminDashboard/AddServices/AddServices';
import MakeAdmin from '../AdminDashboard/MakeAdmin/MakeAdmin';
import ServiceList from '../AdminDashboard/ServiceList/ServiceList';

const DashboardRoot = () => {
    return (
        <div className='lg:grid grid-cols-2 p-3'>
            <div className='px-4 py-2'>
                <div>
                    <img className='w-3/12' src={logo} alt="" />
                </div>
                <div className='text-left mt-5'>
                    <NavLink activeStyle={{}} to='/dashboard/serviceList'><i className="fas fa-list"></i> Services List</NavLink>
                    <br />
                    <NavLink activeStyle={{}} to='/dashboard/addService'><i className="fas fa-plus"></i> Add Service</NavLink>
                    <br />
                    <NavLink activeStyle={{}} to='/dashboard/makeAdmin'><i className="fas fa-user-plus"></i> Make Admin</NavLink>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-3xl font-bold'>Dashboard</h1>
                </div>

                <Routes>
                    <Route path='/dashboard/serviceList' element={<ServiceList />} />
                    <Route path='/dashboard/addService' element={<AddServices />} />
                    <Route path='/dashboard/makeAdmin' element={<MakeAdmin />} />
                </Routes>

            </div>
        </div>
    );
};

export default DashboardRoot;