import PlanPageDropdown from '@/Components/CSR links/PlanPageDropdown';
import PlanPageTabs from '@/Components/CSR links/PlanPageTabs';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: "FITLOG-MyPlan",
    description: "...",
};

const MyPlanPage = () => {


    return (
        <section className='container mx-auto mt-14 flex flex-col gap-8'>
            <div className='flex flex-col gap-1'>
                <h2 className='font-oswald font-bold text-4xl text-[#FFFFFF]'>MY PLAN</h2>
                <p className='font-inter text-[15px] text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='bg-[#13161D] border border-[#232732] rounded-2xl p-12'>
                <div className='grid grid-cols-3 grid-rows-1'>

                    <div className='space-y-1'>
                        <h6 className='font-inter text-[15px] text-[#8A92A0]'>Exercises</h6>
                        <p className='font-oswald font-bold text-5xl text-[#CCFF00]'>0</p>
                    </div>


                    <div className='flex items-center'>
                        <div className="divider lg:divider-horizontal h-18"></div>
                        <div className='space-y-1'>
                            <h6 className='font-inter text-[15px] text-[#8A92A0]'>Minutes</h6>
                            <p className='font-oswald font-bold text-5xl text-[#FFFFFF]'>0</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className="divider lg:divider-horizontal h-18"></div>
                        <div className='space-y-1'>
                            <h6 className='font-inter text-[15px] text-[#8A92A0]'>Calories</h6>
                            <p className='font-oswald font-bold text-5xl text-[#FFFFFF]'>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <PlanPageTabs />

                <PlanPageDropdown />
            </div>

            <div className='flex flex-col justify-center items-center gap-2 border-2 border-dashed bg-[#111317] rounded-2xl border-[#FFFFFF]/20 p-20'>
                <h2 className='font-oswald font-bold text-3xl text-[#FFFFFF]'>NOTHING HERE YET</h2>
                <p className='font-inter text-[17px] text-[#A1A1AA]'>Browse the library and add a lift to get today moving.</p>
                <Link href={'/'}>
                    <button className='btn bg-[#C2F800] text-[#0C0D10] rounded-4xl text-[15px] font-inter font-bold py-6 px-8'>Go to workouts</button>
                </Link>

            </div>



        </section>
    );
};

export default MyPlanPage;