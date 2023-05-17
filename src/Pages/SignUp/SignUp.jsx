import React, { useContext, useState } from 'react';
import signUpImg from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const SignUp = () => {
    const {google, signUp, successNotify, errorNotify} = useContext(AuthContext)
    const [redirect, setRedirect] = useState(false)

    // handle Sign Up Form
    const handleSignUpForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        signUp(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            form.reset()
            successNotify('create user successfully')
            setRedirect(true)
        })
        .catch(error => {
                errorNotify(error.message)
            
        })
    }

    // sign up with google
    const handleSignUpWithGoogle = () => {
        console.log('this is google')
        google()
        .then((result) => {
            const user = result.user;
            console.log(user)
        })
        .then(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content gap-8 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={signUpImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body border border-gray-200">
                        <h1 className='text-center text-3xl font-bold text-[#444444]'>Sign Up</h1>
                        <form onSubmit={handleSignUpForm}>
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
                                <input type="submit" className='bg-[#FF3811] btn' value="Sign In" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Or Sign Up with</p>
                        <div className='flex mx-auto'>
                            <FaFacebook size='2em' className='me-5 text-[#1F80D6]'></FaFacebook>
                            <FaLinkedin size='2em' className='me-5 text-[#1F80D6]'></FaLinkedin>
                            <FaGoogle onClick={handleSignUpWithGoogle} size='2em' className='me-5 text-[#4F74C0]cursor-pointer'></FaGoogle>
                        </div>
                        <p className='text-center my-4'>Already have an account? <Link className='text-[#FF3811]' to='/sign-in'>Sign-in</Link></p>
                        {
                            redirect === true && <>
                            <Navigate to='/sign-in' replace={true}></Navigate>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;