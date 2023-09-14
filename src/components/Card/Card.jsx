/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';

const Card = ({ selectedCourses,totalHour,remainingTime }) => {
    return (
        <div className='w-80 '>

            <div className="card  bg-base-100 shadow-xl px-5 py-5  rounded-lg">
                <div className="card-body ">
                    <div className=' mb-5'>
                        <h2 className='text-blue-600 text-base font-bold'>Credit Hour Remaining:  {remainingTime} </h2>
                    </div>

                    <h2 className="card-title text-xl font-bold ">Course Name:</h2>



                    {
                        selectedCourses.map((course,idx) => (
                            <div key={course.id} className=''>
                                <ol>
                                  
                                    <li> {++idx}. {course.name}</li>
                                    
                                </ol>
                            </div>

                        ))
                    }

                    <div className='mt-8 border-t-2'>
                        <h1>Total Credit Hour : {totalHour}</h1>
                    </div>


                </div>
            </div>






        </div>
    );
};

export default Card;