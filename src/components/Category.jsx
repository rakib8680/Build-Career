import React from 'react';

const Category = ({ category }) => {
    const {logo,available,name} = category
    return (
        <div className='category-card'>
            <img className='category-img' src={logo} />
            <div className='text-left space-y-1'>
                <h1 className='text-lg font-semibold text-slate-700'>{name}</h1>
                <p className='text-xs text-slate-400 '>{available}</p>
            </div>
        </div>
    );
};

export default Category;