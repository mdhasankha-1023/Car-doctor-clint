import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';




const ServiceSection = () => {
    const loadedData = useLoaderData();

    return (
        <div className='my-10'>
            <div className='text-center'>
                <h3 className='text-[#FF3811] text-lg font-bold'>Service</h3>
                <h1 className='text-4xl font-bold my-5'>Our Service Area</h1>
                <p className='mb-10'>the majority have suffered alteration in some form, by injected humour, or randomised<br />words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {
                    loadedData.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceSection;