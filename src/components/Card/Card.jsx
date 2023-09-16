/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React from 'react';

const Card = ({ selectedCourses, totalHour, remainingTime, totalSalary }) => {
    return (
        <div className='w-80 rounded-s-xl '>

            <div className="card  bg-base-100 shadow-xl px-5 py-5  rounded-lg">
                <div className="card-body ">
                    <div className=' mb-5 border-b-2 py-3 pt-4'>
                        <h2 className='text-blue-600 text-lg font-bold'>Credit Hour Remaining:  {remainingTime} hr</h2>
                    </div>

                    <h2 className="card-title text-xl font-bold ">Course Name:</h2>

                    {
                        selectedCourses.map((course, idx) => (
                            <div key={course.id} className=''>
                                <ol className='text-[#1C1B1B99]'>

                                    <li> {++idx}. {course.name}</li>

                                </ol>
                            </div>

                        ))
                    }

                    <div className='mt-8 border-t-2  py-3 pt-4'>
                        <h1 className='text-base font-semibold'>Total Credit Hour : {totalHour}</h1>
                    </div>

                    <div className='border-t-2 text-xl font-bold mt-3 py-3'>
                    <h1>Total Price : {totalSalary} USD</h1>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;