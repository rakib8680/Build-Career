import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gradient-to-r from-[#eef0fc] to-[#f1ecff] h-[80px] flex items-center '>
            <div className=' flex justify-around items-center container mx-auto '>
                <h2 className='text-2xl font-semibold '><span className='font-extrabold'>Build</span>Career</h2>
                <div className='text-xs font-medium text-slate-500 flex gap-20 '>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/appliedJobs">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <button className=' '>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;