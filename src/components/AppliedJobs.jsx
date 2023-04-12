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
    // console.log(jobCart)
    return (
        <div>
            <h1 className='job-details-title'>Applied Jobs</h1>
            <div className='mt-32 flex container mx-auto justify-end mb-10'>
                <button className='my-btn-secondary mr-3'>Remote Jobs</button>
                <button className='my-btn-secondary'>Onsite Jobs</button>
            </div>
            <div className='mb-32 container mx-auto '>
                {jobCart.map(appliedJob => <SingleAppliedJob appliedJob={appliedJob} key={appliedJob.id}></SingleAppliedJob>)}
            </div>
        </div>
    );
};

export default AppliedJobs;