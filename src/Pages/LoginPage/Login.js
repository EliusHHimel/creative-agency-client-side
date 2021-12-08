import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logos/logo.png";

const Login = () => {
    return (
        <div className='p-5'>
            <center>
                <Link to='/'>  <img className='lg:w-1/4' src={logo} alt="" /></Link>
            </center>
            <h1 className='text-4xl mt-2 font-bold'>Login to your account</h1>
            <div className='flex justify-center align-center'>
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="yourmail@example.com" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            <p class="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/resetpassword">
                                Forgot Password?
                            </a>
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl'>or</h1>

                            <center>
                                <button className='text-black font-bold py-2 mt-2 px-4 border rounded flex justify-between align-center'><img className='login-logo mr-2' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" /><span className='login-social-margin'>Login With Google</span></button>
                                <button className='text-black font-bold py-2 px-4 mt-2 border rounded flex justify-between align-center'><img className='login-logo mr-2' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /><span className='login-social-margin'>Login With GitHub</span></button>
                            </center>
                            <p className='text-gray-500 mt-2'>
                                Don't have an account? <Link className='text-blue-500 hover:text-blue-800' to='/register'>Register</Link>
                            </p>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2021 Creative Agency. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;