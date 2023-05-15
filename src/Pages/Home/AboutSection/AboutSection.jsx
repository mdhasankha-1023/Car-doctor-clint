import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const AboutSection = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-8 gap-16">
            <figure className='w-1/2 h-[557px] relative'>
                <img src={person} className='w-4/5 h-[420px]' alt="Album" />
                <img src={parts} className='w-3/5 h-[312px] absolute bottom-0 right-0 border-8 border-white rounded-lg ' alt="Album" />
            </figure>
            <div className="card-body w-1/2">
                <p className='text-[#FF3811] flex-grow-0 mb-2 font-bold'>About Us</p>
                <h2 className="card-title text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h2>
                <p className='flex-grow-0 mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /><br />
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className="btn bg-[#FF3811] me-5 w-2/6">Get More Info</button>
                
            </div>
        </div>
    );
};

export default AboutSection;