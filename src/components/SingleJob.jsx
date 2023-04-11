import React from 'react';
import { Link } from 'react-router-dom';

const SingleJob = ({ job }) => {

    const { logo, company, position, location, salary, id, worktime, type } = job

    return (
        <div className=' mx-auto text-left border p-7 space-y-3 rounded-md md:w-[700px] md:h-[400px] md:relative'>
            <img className=' w-auto pb-3' src={logo} />
            <div >
                <h1 className='text-xl font font-semibold text-slate-600'>{position}</h1>
                <p className='mt-2 font-semibold text-slate-500'>{company}</p>
            </div>
            <div className='pt-3'>
                <button className='my-btn-secondary mr-3'>{type}</button>
                <button className='my-btn-secondary'>{worktime}</button>
            </div>
            <div className='pb-3 flex gap-6 font-semibold text-slate-500'>
                <p>Location : {location}</p>
                <p>Salary : {salary}</p>
            </div>
            <Link to={`/jobDetails/${id}`} className='my-btn-primary md:absolute bottom-5'>View Details</Link>
        </div>
    );
};

export default SingleJob;