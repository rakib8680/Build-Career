import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-10 '>
            <h1 class=" text-gradient text-center mb-12">Important Questions</h1>
            <div>
                <h1 class="text-3xl font-semibold text-violet-500 p-5 md:p-0">Question 1 :
                    <span className=" text-3xl font-semibold text-slate-700">When should we use Context API ? </span>
                </h1>
                <p className="text-violet-500 text-lg p-5 ">Answer: <br />
                    <span className=" text-slate-700 ">
                        We should use Context API when we need to share data between multiple components. When prop drilling become very complicated then we should use Context API. <br />
                    </span>
                </p>
            </div>
            <div>
                <h1 class="text-3xl font-semibold text-violet-500 p-5 md:p-0">Question 2 :
                    <span className=" text-3xl font-semibold text-slate-700">What is custom hook in React ? </span>
                </h1>
                <p className="text-violet-500 text-lg p-5 ">Answer: <br />
                    <span className=" text-slate-700 ">
                        Custom Hook is a JavaScript function that starts with the prefix "use". It allows us to reuse some function between different components.<br />
                    </span>
                </p>
            </div>
            <div>
                <h1 class="text-3xl font-semibold text-violet-500 p-5 md:p-0">Question 3 :
                    <span className=" text-3xl font-semibold text-slate-700">What is useRef in React ? </span>
                </h1>
                <p className="text-violet-500 text-lg p-5 ">Answer: <br />
                    <span className=" text-slate-700 ">
                        'useRef' is a react hook that is used to create reference to a DOM element. It returns an object with a property named 'current', that stores the current value of the reference. <br />
                    </span>
                </p>
            </div>
            <div>
                <h1 class="text-3xl font-semibold text-violet-500 p-5 md:p-0">Question 4 :
                    <span className=" text-3xl font-semibold text-slate-700">What is useMemo in React ? </span>
                </h1>
                <p className="text-violet-500 text-lg p-5 ">Answer: <br />
                    <span className=" text-slate-700 ">
                        'useMemo' is a react hook that is used to memorize the result of a function. It improves the performance of a React Application.'useMemo'  takes two arguments: a function and an array. <br />
                    </span>
                </p>
            </div>

        </div>
    );
};

export default Blog;