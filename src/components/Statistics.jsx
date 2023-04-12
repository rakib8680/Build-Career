import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

const Statistics = () => {


    const marks = [
        { name: 'assign_1', mark: 57 },
        { name: 'assign_2', mark: 57 },
        { name: 'assign_3', mark: 60 },
        { name: 'assign_4', mark: 55 },
        { name: 'assign_5', mark: 59 },
        { name: 'assign_6', mark: 56 },
        { name: 'assign_7', mark: 60 },
        { name: 'assign_8', mark: 60 },
    ]


    return (
        <div className='bg-gradient-to-r from-[#f2f3fb] to-[#f7f4ff] pt-5 pb-72 '>
            <div className='container mx-auto '>
                <ComposedChart
                    className='mx-auto mt-20'
                    width={1000}
                    height={400}
                    data={marks}
                    margin={{
                        top: 20,
                        right: 80,
                        bottom: 20,
                        left: 20,
                    }}>
                    <CartesianGrid stroke="violet" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip />
                    <Area type="monotone" dataKey="mark" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="mark" stroke="#ff7300" />
                </ComposedChart>
                <h1 className='text-center text-violet-500 font-semibold mt-6'> My assignment results chart</h1>
            </div >
        </div>
    );
};

export default Statistics;