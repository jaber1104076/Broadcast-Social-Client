import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('You have Logout Successfully')
            })
    }
    const navMenu =
        <React.Fragment>
            <li><Link to='/media' className='text-[#0083B0] font-medium text-lg'>Media</Link></li>
            <li><Link to='/message' className='text-[#0083B0] font-medium text-lg'>Message</Link></li>
            <li><Link to='/about' className='text-[#0083B0] font-medium text-lg'>About</Link></li>
        </React.Fragment>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <Link to='/' className="ml-4 normal-case text-xl text-[#0083B0] font-medium">Broadcast Socials</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <Link onClick={handleSignOut} to='/signup' className="hover:text-gray-100 bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-5 py-3 rounded-md">Sign out</Link>
                            </>
                            :
                            <>
                                <Link to='/signup' className="hover:text-gray-100 bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-5 py-3 rounded-md mr-2">Sign UP</Link>
                                <Link to='/login' className="hover:text-gray-100 bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-5 py-3 rounded-md">Login</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;