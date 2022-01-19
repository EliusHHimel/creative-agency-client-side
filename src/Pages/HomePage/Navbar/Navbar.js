import React, { useState } from 'react';
import logo from '../../../images/logos/logo.png';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState('hidden');
    const { user } = useFirebase();

    const menuToggleHandler = () => {
        setIsOpen(isOpen === 'hidden' ? 'block' : 'hidden');
    }

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-custom p-6">
                <div className="block">
                    <img className='w-32' src={logo} alt="Creative agency logo" />
                </div>
                <div className="block lg:hidden mt-3">
                    <button onClick={menuToggleHandler} className="flex items-center px-3 py-2 border rounded border-black-400 hover:text-white hover:border-white">
                        <svg className="fill-current text-black h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-screen ${isOpen} flex-grow lg:flex text-right lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow">
                        <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4" to="/">Home</NavLink>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4" href="#our-portfolio">Our Portfolio</a>
                        <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4" to="#our-team">Our Team</NavLink>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4" href="#contact">Contact</a>
                        <span className='font-bold'>Hi,</span><span className='p-2 font-bold text-gray-700'>{user.displayName}</span>
                        {user.email ? <NavLink className="inline-block text-sm px-4 py-2 login-btn leading-none border rounded text-white border-white hover:border-black hover:text-black hover:bg-white mt-4 lg:mt-0" to="/dashboard">Dashboard</NavLink> : <NavLink className="inline-block text-sm px-4 py-2 login-btn leading-none border rounded text-white border-white hover:border-black hover:text-black hover:bg-white mt-4 lg:mt-0" to="/login">Login</NavLink>}
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;