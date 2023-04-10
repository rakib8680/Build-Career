import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-[#eef0fc] to-[#f1ecff]'>
                <div className='md:flex justify-center container mx-auto items-center px-4 md:p-0'>
                    <div className='md:w-[420px] space-y-7'>
                        <h1 className='md:text-6xl text-3xl font-bold md:leading-snug'><span className='pb-5 '>One Step</span> Closer To Your <span className='text-gradient'>Dream Job</span>
                        </h1>
                        <p className='text-slate-600 text-sm md:text-base leading-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='my-btn-primary'>Get Started</button>
                    </div>
                    <div>
                        <img className='md:w-[700px] md:h-[630px]' src="../../public/All Images/men.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;