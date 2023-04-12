import React from 'react';
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({ appliedJob }) => {
    console.log(appliedJob)
    const { id, company, logo, position, type, worktime, location, salary } = appliedJob
    return (
        <div>
            <div className=' mx-auto text-left border p-3 space-y-3 rounded-md  mb-5 flex items-center justify-between w-[1000px] shadow-sm'>
                <div className='flex gap-10'>
                    <div className='bg-slate-100 flex p-5 rounded-md'>
                        <img className='w-40 h-10 my-auto' src={logo} />

                    </div>
                    <div>
                        <div >
                            <h1 className='text-xl font font-semibold text-slate-600'>{position}</h1>
                            <p className='mt-2 font-semibold text-slate-500'>{company}</p>
                        </div>
                        <div className='pt-3'>
                            <button className='my-btn-secondary mr-3'>{type}</button>
                            <button className='my-btn-secondary'>{worktime}</button>
                        </div>
                        <div className='pb-3 flex flex-col font-semibold text-slate-500'>
                            <p>Location : {location}</p> 
                            <p>Salary : {salary}</p>
                        </div>
                    </div>
                </div>
                <div className='mr-5'>
                    <Link to={`/jobDetails/${id}`} className='my-btn-primary '>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleAppliedJob;