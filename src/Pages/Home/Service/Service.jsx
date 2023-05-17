import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, price, title, _id } = service;


    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='w-[314px] h-[208px]' src={img} alt="" /></figure>
            <div className="card-body p-5">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center mt-4">
                    <h4 className='text-[#FF3811] text-xl'>Price: ${price}</h4>
                    <Link to={`/check-out/${_id}`}>
                        <button className="btn btn-xs bg-[#FF3811]"><FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;