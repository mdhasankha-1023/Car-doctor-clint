import React from 'react';
import slider1 from '../../../assets/images/banner/1.jpg'
import slider2 from '../../../assets/images/banner/2.jpg'
import slider3 from '../../../assets/images/banner/3.jpg'
import slider4 from '../../../assets/images/banner/4.jpg'
import slider5 from '../../../assets/images/banner/5.jpg'
import slider6 from '../../../assets/images/banner/6.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full h-[550px] rounded-xl" />
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle me-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute h-full rounded-xl top-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-20 mt-20'>
                        <h2 className='text-6xl font-medium text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] me-5">Discover More</button>
                        <button className="btn btn-outline text-[#fff]">Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={slider2} className="w-full h-[550px] rounded-xl" />
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle me-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute h-full rounded-xl top-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-20 mt-20'>
                        <h2 className='text-6xl font-medium text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] me-5">Discover More</button>
                        <button className="btn btn-outline text-[#fff]">Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={slider3} className="w-full h-[550px] rounded-xl" />
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle me-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute h-full rounded-xl top-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-20 mt-20'>
                        <h2 className='text-6xl font-medium text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] me-5">Discover More</button>
                        <button className="btn btn-outline text-[#fff]">Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src={slider4} className="w-full h-[550px] rounded-xl" />
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle me-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute h-full rounded-xl top-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-20 mt-20'>
                        <h2 className='text-6xl font-medium text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] me-5">Discover More</button>
                        <button className="btn btn-outline text-[#fff]">Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
            <img src={slider5} className="w-full h-[550px] rounded-xl" />
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle me-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute h-full rounded-xl top-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-20 mt-20'>
                        <h2 className='text-6xl font-medium text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] me-5">Discover More</button>
                        <button className="btn btn-outline text-[#fff]">Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
            <img src={slider6} className="w-full h-[550px] rounded-xl" />
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle me-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute h-full rounded-xl top-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-20 mt-20'>
                        <h2 className='text-6xl font-medium text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] me-5">Discover More</button>
                        <button className="btn btn-outline text-[#fff]">Latest Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;