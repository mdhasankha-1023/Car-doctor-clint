import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';
import Swal from 'sweetalert2';

const Orders = () => {
    const loadedData = useLoaderData();
    const [orders, setOrders] = useState(loadedData);
    console.log(loadedData)

    // handle delete button
    const handleDltBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(orders)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your order has been deleted.',
                                'success'
                            )
                            const remaining = orders.filter(order => order._id !== id);
                            setOrders(remaining)
                        }
                    })
            }
        })
    }


    return (
        <div>
            <h1>All Orders</h1>
            {
                orders.map(order => <Order
                    key={order._id}
                    order={order}
                    handleDltBtn={handleDltBtn}></Order>)
            }
        </div>
    );
};

export default Orders;