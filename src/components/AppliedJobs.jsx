import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getJobCart } from '../fakeDB';
import SingleAppliedJob from './SingleAppliedJob';

const AppliedJobs = () => {

    const { jobs } = useLoaderData()

    const idData = getJobCart()

    let jobCart = []

    for (const id in idData) {
        const appliedJobs = jobs?.find(job => job.id === parseInt(id))
        jobCart.push(appliedJobs)
    }

    // handle sort by 
    const handleSortBY = value => {
        
    }

    return (
        <div>
            <h1 className='job-details-title'>Applied Jobs</h1>
            <div className='mt-32 flex container mx-auto pr-5 md:pr-0 justify-end mb-10'>

                <select name="" id="" className='bg-gradient-to-r from-[#cad0ff] to-[#d7c9ff] p-3 text-purple-800 font-semibold rounded-md'>
                    <option value="Remote">Remote Jobs</option>
                    <option value="Full-time">Onsite Jobs</option>
                </select>
            </div>
            <div className='mb-32 container mx-auto p-5 md:p-0'>
                {jobCart.map(appliedJob => <SingleAppliedJob appliedJob={appliedJob} key={appliedJob.id}></SingleAppliedJob>)}
            </div>
        </div>
    );
};

export default AppliedJobs;