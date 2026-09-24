"use client";
import { workContext } from '@/WorkoutContext/workContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const NavEndLinks = () => {

    const {addToPlan, savedForLater} = useContext(workContext)

    return (
        <div className='flex gap-3.5'>
            <Link className='text[14px] text-[#D1D5DB] font-inter hover:bg-gray-800/45 px-3 py-2 rounded-xl flex items-center shrink-0 gap-1' href={'/MyPlan'}>Plan <span className=' flex justify-center items-center w-7 h-7 rounded-full bg-[#C2F800] text-[#000000]'>{addToPlan.length}</span></Link>
            <Link className='text[14px] text-[#9CA3AF] font-inter px-3 py-2 rounded-xl hover:bg-gray-800/45 flex items-center shrink-0 gap-1' href={'/MyPlan'}>Saved <span className='flex justify-center items-center w-7 h-7 rounded-[50%] border-2'>{savedForLater.length}</span></Link>
        </div>
    );
};

export default NavEndLinks;