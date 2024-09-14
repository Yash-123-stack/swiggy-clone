import React, {useState, useEffect } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function TopRest() {
    const [data,setData] = useState([]);
       
        const fetchToprestaurant = async () => {
            const response = await fetch('http"//localhost:5000/restaurants');
            const apiData = await response.json();
            setData(apiData);
        }
        useEffect(
            () => {
                fetchToprestaurant();
            }, []
        )
    
    return (
        <div className ='max-w-[1200px] mx-auto'>
            <div className = 'flex items-center justify-between'>
                <div className = 'text-[25px] font-bold'>Top Restaurent chains in Indore</div>
                <div className = 'flex'>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' >
                    <FaArrowLeft/>
                </div>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
            </div>
        </div>
    </div>
    )
}