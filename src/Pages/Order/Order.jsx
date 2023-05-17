import React from 'react';

const Order = ({ order, handleDltBtn }) => {
    const { img, title, price, date, _id } = order;

    

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <button onClick={() => handleDltBtn(_id)} className="btn btn-circle btn-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={img} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{title}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className='font-bold text-[#FF3811]'>${price}</span>
                        </td>
                        <td>{date}</td>
                        <th>
                            <button className="btn btn-xs">Please Confirm</button>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default Order;