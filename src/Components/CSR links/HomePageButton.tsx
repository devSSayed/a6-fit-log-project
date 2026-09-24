'use client';
import React from 'react';

const HomePageButton = () => {

    const handleScrollToLibrary = () => {
        const librarySection = document.getElementById('library');
        librarySection?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='hover:aura hover:aura-silver w-fit'>
            <button onClick={handleScrollToLibrary} className='btn bg-[#C2F800] text-[#0C0D10] font-inter font-bold py-6'>BROWSE WORKOUTS</button>
        </div>
    );
};

export default HomePageButton;