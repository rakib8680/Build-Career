import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-container'>
            <div className='nav-bar'>
                <Link to='/' className='text-2xl font-semibold '><span className='font-extrabold text-[#946dff]'>Build</span>Career</Link>
                <div className='nav-link'>
                    <NavLink to="/statistics" className={({ isActive }) => (isActive ? 'text-[#9872ff]' : 'default')}>Statistics</NavLink>
                    <NavLink to="/appliedJobs" className={({ isActive }) => (isActive ? 'text-[#9872ff]' : 'default')}>Applied Jobs</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-[#9872ff]' : 'default')}>Blog</NavLink>
                </div>
                <button className='my-btn-primary'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;