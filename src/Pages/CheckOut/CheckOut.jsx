import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const {user, successNotify} = useContext(AuthContext)
    const loadedData = useLoaderData();
    const {img, title, price} = loadedData;
    console.log(loadedData)


    // handleOrderForm
    const handleOrderForm = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const message = form.message.value;
        const order = {name, email, phone, date, message, img, title, price}
        
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                form.reset()
                successNotify('Your Order added')
            }
        })
    }




    return (
        <div className="hero bg-[#F3F3F3] my-8 rounded-lg">
            <div className="card flex-shrink-0 w-full p-20">
                <form onSubmit={handleOrderForm}>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 mb-5">
                            <input type="text" name='name' placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2 mb-5">
                            <input type="email" name='email' defaultValue={user.email} readOnly className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2">
                            <input type="number" name='phone' placeholder="Your phone" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <input type="date" name='date' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                        <textarea className='input input-bordered h-[250px] w-full p-3' name="message" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;