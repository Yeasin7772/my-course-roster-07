/* eslint-disable no-unused-vars */
import React from 'react';

const Card = ({ SelectedCourses }) => {
    return (
        <div>
            <h2>Credit Hour Remaining 7 hr: {SelectedCourses.length}</h2>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="card-title">Course Name:</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Card;