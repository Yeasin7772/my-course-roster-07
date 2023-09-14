import React from 'react';


const Home = () => {

    const []= 

    return (
        <div className='mt-20 '>
            {/* main container */}
            <div className="container mx-auto flex">

                {/* home container */}
                <div className="w-2/3">

                    {/* card container */}

                    <div className="grid grid-cols-3">
                       

                        <div className="card card-compact bg-base-100 shadow-xl h-96 px-4">
                            <figure><img className='' src="https://i.ibb.co/KVt9v24/Rectangle-2.png" /></figure>
                            <div className="card-body py-6">
                                <h2 className=" text-[#1C1B1B] text-lg font-semibold">Introduction to Algorithm</h2>
                                <p className='text-[#1C1B1B99]'>It is a long established fact that a reader will be distracted by the readable
                                     content of a page when looking at its layout.</p>
                                     <div className='flex justify-between mt-3 text-[#1C1B1B99]'>
                                        <p>Price : 25000</p>
                                        <p>Credit : 2hr</p>
                                     </div>
                                <div className=" text-center mt-7 bg-blue-600 rounded-lg py-2">
                                    <button className="btn  text-white">Select</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* anthor on */}

                <div className='w-1/3 border-2'>

                    <h1>hello</h1>
                </div>

            </div>

            


        </div>
    );
};

export default Home;