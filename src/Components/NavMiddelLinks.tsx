"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const NavMiddelLinks = () => {

    const pathName = usePathname()


    const links = <>
        <div className='flex gap-2'>
            <li><Link href={'/'} className={`${pathName === '/' ? 'text-[16px] px-[25px] text-[#C2F800] font-semibold bg-[#1A2312] rounded-[20px]' : 'font-inter font-light hover:rounded-[20px] active:font-semibold text-[16px] text-[#9CA3AF]'}`}>Workouts</Link></li>
            <li><Link href={'/MyPlan'} className={`${pathName === '/MyPlan' ? 'text-[16px] px-[25px] text-[#C2F800] font-semibold bg-[#1A2312] rounded-[20px]' : 'font-inter font-light hover:rounded-[20px] active:font-semibold text-[16px] text-[#9CA3AF]'}`}>My Plan</Link></li>
        </div>


    </>

    return (
        <>
            {links}
        </>
    );
};

export default NavMiddelLinks;