import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gradient-to-r from-[#eef0fc] to-[#f1ecff] h-[100px] flex items-center '>
            <div className=' flex justify-around items-center container mx-auto '>
                <Link to='/' className='text-2xl font-semibold '><span className='font-extrabold text-[#946dff]'>Build</span>Career</Link>
                <div className='text-xs font-medium text-slate-600 flex gap-20 '>
                    <NavLink to="/statistics" className={({ isActive }) => (isActive ? 'text-[#9872ff]' : 'default')}>Statistics</NavLink>
                    <NavLink to="/appliedJobs" className={({ isActive }) => (isActive ? 'text-[#9872ff]' : 'default')}>Applied Jobs</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-[#9872ff]' : 'default')}>Blog</NavLink>
                </div>
                <button className='bg-gradient-to-r from-[#6f85ff] to-[#916aff] px-3 py-3 text-white font-semibold rounded-md'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;