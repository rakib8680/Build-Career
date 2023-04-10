import React from 'react';

const Category = ({ category }) => {
    console.log(category)
    const {logo,available,name} = category
    // w-[315px] h-[245px]
    return (
        <div className='flex flex-col  bg-gradient-to-r from-[#f7f8fe] to-[#f6f3ff] rounded-md p-10 space-y-7 w-[300px]'>
            <img className=' h-[60px] w-[60px] p-3 bg-[#ede6fe] rounded-md' src={logo} />
            <div className='text-left space-y-1'>
                <h1 className='text-lg font-semibold text-slate-700'>{name}</h1>
                <p className='text-xs text-slate-400 '>{available}</p>
            </div>
        </div>
    );
};

export default Category;