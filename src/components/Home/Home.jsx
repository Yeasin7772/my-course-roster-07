/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Home = () => {

    const [allCourses, setAllCourses] = useState([])
    const [selectedCourses, setSelectedCourses] = useState([])
    const [remainingTime, setRemainingTime] = useState(0)
    const [totalHour, setTotalHour] = useState(0)

    useEffect(() => {

        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))



    }, [])

    const handelSelect = (course) => {
        const isExit = selectedCourses.find((item) => item.id == course.id)
        let count = course.Credit
        if (isExit) {
            alert('item all ready added')
        } else {

            selectedCourses.forEach(item => {
                count = count + item.Credit
            })

            console.log(count);

            const totalRemainingTime = 20 - count

            if (count > 20) {
                alert('You dont have enough time')
            } else {
                setTotalHour(count)
                setRemainingTime(totalRemainingTime)

                const newCourses = [...selectedCourses, course]
                console.log(newCourses);
                setSelectedCourses(newCourses)


            }



        }




    }

    //console.log(allCourses);

    return (
        <div className='mt-20 '>
            {/* main container */}
            <div className="container mx-auto flex gap-12">

                {/* home container */}
                <div className="w-2/3">

                    {/* card container */}

                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8  ">


                        {

                            allCourses.map(course => (
                                <div key={course.id} className="card card-compact bg-base-100 shadow-xl  px-2">
                                    <figure><img className='' src={course.image} /></figure>
                                    <div className="card-body">
                                        <h2 className=" text-[#1C1B1B] text-base font-semibold">{course.name}</h2>
                                        <p className='text-[#1C1B1B99]'>{course.title} </p>
                                        <div className='flex justify-between mt-3 text-[#1C1B1B99]'>
                                            <p> $ Price: {course.salary}</p>
                                            <p> Credit: {course.Credit}hr</p>
                                        </div>
                                        <div onClick={() => handelSelect(course)}
                                            className=" text-center mt-4  bg-blue-600 rounded-lg py-2">
                                            <button className="btn  text-white">Select</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            )



                        }

                    </div>

                </div>

                {/* anthor on */}

                <div className='w-1/12 '>

                    <Card selectedCourses={selectedCourses}
                    remainingTime={remainingTime}
                    totalHour={totalHour}
                    >

                    </Card>

                </div>

            </div>




        </div>
    );
};

export default Home;