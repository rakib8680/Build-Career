import React from 'react';

const SingleJob = ({ job }) => {

    const { logo, company, position, location, salary, id, worktime,type } = job


    return (
        <div>
            <img src={logo} />
            <div>
                <h1>{position}</h1>
                <p>{company}</p>
            </div>
            <div>
                <button>{type}</button>
                <button>{worktime}</button>
            </div>
            <div>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button>View Details</button>
        </div>
    );
};

export default SingleJob;