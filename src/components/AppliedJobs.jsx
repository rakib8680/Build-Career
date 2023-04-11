import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getJobCart } from '../fakeDB';

const AppliedJobs = () => {

    const { jobs } = useLoaderData()

    const idData = getJobCart()

    let jobCart = []

    for (const id in idData) {
        const appliedJobs = jobs?.find(job => job.id === parseInt(id))
        jobCart.push(appliedJobs)
    }
    console.log(jobCart)
    return (
        <div>
            <h1 className='job-details-title'>Applied Jobs</h1>
        </div>
    );
};

export default AppliedJobs;