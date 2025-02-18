import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Category() {
    const [slide, setSlide] = useState(0);
    const [categories, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // option to handle errors

    const fetchCategory = async () => {
        try {
            const response = await fetch('http://localhost:5000/categories');

            if (!response.ok) {
                throw new Error("Failed to fetch categories");
            }
            const data = await response.json();
            setCategory(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(
        () => {
            fetchCategory();
        }, []
    );

    const nextSlide = () => {
        console.log(categories.length);
        if (categories.length - 8 === slide) return false;
        setSlide(slide + 3);
    }
    const prevSlide = () => {
        if (slide === 0) return false;
        setSlide(slide - 3);
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error:{error}</div>;

    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='text-2xl font-bold'>What's on your Mind?</div>
                    <div className='flex'>
                        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                            <FaArrowLeft />
                        </div>
                        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}><FaArrowRight /></div>
                    </div>
                </div>
                <div className='flex border border-red-600 overflow-hidden'>
                    {
                        categories.map(
                            (cat, index) => {
                                return (
                                    <div className="transition transform scroll-smooth w-[150px] shrink-0" style={{
                                        transform: `translateX(-${slide * 100}%)`
                                    }} key={index} >
                                        <img src={require(`../constant/swiggy-images/${cat.image}`)} alt="" />
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                <hr className='my-6 border-p-[1px]' />
            </div>
        </>
    )
}