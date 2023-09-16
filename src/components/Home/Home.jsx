/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import Card from '../Card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [allCourses, setAllCourses] = useState([])
    const [selectedCourses, setSelectedCourses] = useState([])
    const [remainingTime, setRemainingTime] = useState(20)
    const [totalHour, setTotalHour] = useState(0)
    const [totalSalary, setTotalSalary] = useState(0)

    useEffect(() => {

        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])

    const handelSelect = (course) => {
        const isExit = selectedCourses.find((item) => item.id == course.id)
        let count = course.Credit
        let salary = course.salary
        if (isExit) {

           
            toast("All Ready Exit!")
        } else {

            selectedCourses.forEach(item => {
                count = count + item.Credit
                salary = salary + item.salary
               
            })

            

            const totalRemainingTime = 20 - count

            if (count > 20) {
                
                toast(" Error!! Not enough hours!")
            } else {
                setTotalSalary(salary)
                setTotalHour(count)
                setRemainingTime(totalRemainingTime)

                const newCourses = [...selectedCourses, course]
                //console.log(newCourses);
                setSelectedCourses(newCourses)
            }


        }


    }

    //console.log(allCourses);

    return (
        <div className='mt-20 container  mx-auto'>
            {/* main container */}
            <div className=" sm:w-full lg:flex sm:flex-row  gap-12">

                {/* home container */}
                <div className="w-2/3">

                    {/* card container */}

                    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">


                        {

                            allCourses.map(course => (
                                <div key={course.id} className="card card-compact bg-base-100 shadow-xl  px-2">
                                    <figure><img className='' src={course.image} /></figure>
                                    <div className="card-body">
                                        <h2 className=" text-[#1C1B1B] text-base font-semibold py-3">{course.name}</h2>
                                        <p className='text-[#1C1B1B99]'>{course.title} </p>
                                        <div className='flex justify-between mt-3 text-[#1C1B1B99]'>
                                            <p> <span className='text-[#1C1B1B] text-xl'>$</span> Price: {course.salary}</p>

                                            <p> <button className='text-blue-500 ml-2'>  <FaBookmark></FaBookmark></button> Credit: {course.Credit}hr</p>
                                        </div>
                                        <div  onClick={() => handelSelect(course)} className="text-center mt-4 bg-blue-600 rounded-lg py-2">

                                            <button className="btn text-white">
                                                Select
                                            </button>
                                            <ToastContainer />

                                        </div>

                                    </div>
                                </div>
                            )
                            )



                        }

                    </div>

                </div>

                {/* anther on */}

                <div className='w-2/12'>

                    <Card selectedCourses={selectedCourses}
                        remainingTime={remainingTime}
                        totalHour={totalHour}
                        totalSalary={totalSalary}
                    >
                    </Card>

                </div>

            </div>

        </div>
    );
};

export default Home;