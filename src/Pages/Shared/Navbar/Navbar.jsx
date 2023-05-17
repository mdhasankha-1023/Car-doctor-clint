import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg'
import ActiveRoutes from '../../../Routes/ActiveRoutes/ActiveRoutes';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut, errorNotify } = useContext(AuthContext);
    // console.log(user.photoURL)


    // handle logOut button
    const handleLogOutBtn = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                errorNotify(error.message)
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/about'>About</Link>
                        </li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><ActiveRoutes to='/'>Home</ActiveRoutes></li>
                    <li tabIndex={0}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li><Link to='/orders'>Orders</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        {
                            user.photoURL !== null ?
                                <div className="avatar me-4">
                                    <div className="rounded-full w-8">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                :
                                <div className="avatar placeholder me-4">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                        <FaUser></FaUser>
                                    </div>
                                </div>
                        }


                        <button onClick={handleLogOutBtn} className="btn btn-sm">Log-out</button>
                    </>
                        :
                        <Link to='/sign-in'>
                            <button className="btn btn-sm">sign-in</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;