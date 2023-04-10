import React from 'react';

const SingleJob = ({ job }) => {

    const { logo, company, position, location, salary, id, worktime } = job


    return (
        <div>
            <img src={logo} />
            <h1></h1>
            <p></p>
        </div>
    );
};

export default SingleJob;