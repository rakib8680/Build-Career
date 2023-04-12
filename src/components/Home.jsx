import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import SingleJob from './SingleJob';

const Home = () => {

    const { jobs } = useLoaderData()


    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(categoriesData => setCategories(categoriesData.categories))
    }, []);
    

    
    // const [showAll , setShowALL] = useState[false]


    return (
        <>
            {/* banner  */}
            <div className='bg-gradient-to-r from-[#f2f3fb] to-[#f7f4ff]'>
                <div className='md:flex justify-center container mx-auto items-center px-4 md:p-0'>
                    <div className='md:w-[420px] space-y-7'>
                        <h1 className='md:text-6xl text-3xl font-bold md:leading-snug'><span className='pb-5 '>One Step</span> Closer To Your <span className='text-gradient'>Dream Job</span>
                        </h1>
                        <p className='text-slate-600 text-sm md:text-base leading-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='my-btn-primary'>Get Started</button>
                    </div>
                    <div>
                        <img className='md:w-[700px] md:h-[630px]' src="https://i.ibb.co/M6qcM4Q/P3-OLGJ1-copy-1.png" />
                    </div>
                </div>
            </div>


            {/* .............................category section....................  */}
            <section className='my-32  container mx-auto text-center '>

                <h1 className='text-4xl font-semibold'>Job Category List</h1>
                <p className='text-sm  text-slate-500 mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='category-container'>
                    {
                        categories.map(category => <Category category={category} key={category.id}></Category>)
                    }
                </div>

            </section>



            {/*............................ featured jobs section...................  */}
            <section className='container mx-auto text-center mb-5'>
                <h1 className='text-4xl font-semibold'>Featured Jobs</h1>
                <p className='text-sm  text-slate-500 mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 p-4 md:p-0'>
                    {
                        jobs.length>4 ? jobs?.map(job => <SingleJob job={job} key={job.id}></SingleJob>) : jobs?.slice(0, 4).map(job => <SingleJob job={job} key={job.id}></SingleJob>)
                    }
                </div>
            <button className='my-btn-primary flex mx-auto mt-16'>See All Jobs</button>
            </section>
            


        </>
    );
};

export default Home;