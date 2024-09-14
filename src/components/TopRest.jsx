import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function TopRest() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // option to handle errors

    const fetchRestaurants = async () => {
        try {
            const response = await fetch('http://localhost:5000/restaurants');
            if (!response.ok) {
                throw new Error("Failed to fetch restaurants");
            }
            const data = await response.json();
            setData(data[0]); // Assuming the data is in an array
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(
        () => {
            fetchRestaurants();
        }, []
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error:{error}</div>;


    return (
        <div className='max-w-[1200px] mx-[12%]'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Top Restaurent chains in Indore</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' >
                        <FaArrowLeft />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
                </div>
            </div>
            {/* Display restaurant data */}
            <div className='flex flex-col gap-2'>
                <h2>Restaurants</h2>
                <div className='grid grid-cols-2 gap-3'>
                    {data.map((restaurant, index) => (
                        <div key={index} className='restaurant'>
                            <img src={require(`../constant/swiggy-images/${restaurant.image}`)} alt={restaurant.title} height={100} width={120}  />
                            <h3>{restaurant.title}</h3>
                            <p>{restaurant.offer}</p>
                            <p>Rating: {restaurant.rating}</p>
                            <p>Delivery Time: {restaurant.minTime} - {restaurant.maxTime} mins</p>
                            <p>{restaurant.name}</p>
                            <p>{restaurant.place}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}