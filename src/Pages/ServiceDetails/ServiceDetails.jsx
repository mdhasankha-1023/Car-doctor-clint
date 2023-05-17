import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const loadedServiceDetails = useLoaderData();
    const { banner } = loadedServiceDetails;
    
    return (
        <div className='my-8 relative'>
            <img className='w-full h-[300px] rounded-xl' src={banner} alt="" />
            <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute h-full rounded-xl top-0 w-1/2 ps-10 pt-16'>
                <h3 className='text-white text-4xl'>Service Details</h3>
                <div className='absolute bottom-0 left-[50%] w-full  text-white text-center'>
                    <Link to='/check-out'><button className="btn btn-active">Proceed Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;