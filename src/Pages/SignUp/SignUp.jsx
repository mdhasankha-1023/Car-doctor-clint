import React from 'react';
import signUp from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content gap-8 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={signUp} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body border border-gray-200">
                        <h1 className='text-center text-3xl font-bold text-[#444444]'>Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="type your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="type your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="type your email" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811]">Login</button>
                        </div>
                        <p className='my-4 text-center'>Or Sign Up with</p>
                        <div className='flex mx-auto'>
                            <FaFacebook size='2em' className='me-5 text-[#1F80D6]'></FaFacebook>
                            <FaLinkedin size='2em' className='me-5 text-[#1F80D6]'></FaLinkedin>
                            <FaGoogle size='2em' className='me-5 text-[#4F74C0]'></FaGoogle>
                        </div>
                        <p className='text-center my-4'>Already have an account? <Link className='text-[#FF3811]' to='/sign-in'>Sign-in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;