'use client';
import Link from 'next/link';
import React from 'react';

const HomePageButton = () => {

    const handleScrollToLibrary = () => {
        const librarySection = document.getElementById('library');
        librarySection?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <Link href= '#library'><button onClick={handleScrollToLibrary} className='btn bg-[#C2F800] text-[#0C0D10] font-inter font-bold py-6'>BROWSE WORKOUTS</button></Link>
        </div>
    );
};

export default HomePageButton;