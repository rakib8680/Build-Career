import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const JobDetails = () => {
    const { id } = useParams()
    const [job, setJob] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(jobsData => setJob(jobsData.jobs))
    }, [])




    const myJob = job?.find(j => j.id === parseInt(id))
    console.log(myJob)


    if (myJob) {
        const { logo, company, position, location, salary, type, description, requirements, experience } = myJob
        return (
            <div>
                <h1 className='text-center text-3xl pt-10 pb-24 font-bold bg-gradient-to-r from-[#f2f3fb] to-[#f7f4ff] '>Job Details</h1>
                <div>
                    <div>
                    <h1><span>Job Description : </span>{description}</h1>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        );

    }

};

export default JobDetails;