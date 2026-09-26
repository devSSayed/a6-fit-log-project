"use client";
import { IworkOut } from '@/Components/Types/iWorkout';
import { workContext } from '@/WorkoutContext/workContext';
import React, { useContext } from 'react';

const PlanPageSummaryBox = () => {

    const { addToPlan, savedForLater, activeTab } = useContext(workContext)

    const activeWorkouts = activeTab === 'Today' ? addToPlan : savedForLater;

    const SumOfActiveTab = (activeData: number[]) => {
        return activeData.reduce((acc: number, sum: number) => {
            return acc + sum;
        }, 0)
    }


    const totalMin = activeWorkouts.map((workout: IworkOut) => workout.duration);
    const totalCal = activeWorkouts.map((workout: IworkOut) => workout.caloriesBurned);


    return (
        <div className='bg-[#13161D] border border-[#232732] rounded-2xl p-6 md:p-12'>
            <div className='grid grid-cols-3 grid-rows-1 items-center'>

                <div className='space-y-1'>
                    <h6 className='font-inter text-[15px] text-[#8A92A0]'>Exercises</h6>
                    <p className='font-oswald font-bold text-5xl text-[#CCFF00]'>{activeWorkouts.length}</p>
                </div>


                <div className='flex items-center'>
                    <div className="divider divider-horizontal h-18 my-0 mx-1 sm:mx-4 shrink-0"></div>
                    <div className='space-y-1'>
                        <h6 className='font-inter text-[15px] text-[#8A92A0]'>Minutes</h6>
                        <p className='font-oswald font-bold text-5xl text-[#FFFFFF]'>{SumOfActiveTab(totalMin)}</p>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className="divider divider-horizontal h-18 my-0 mx-1 sm:mx-4 shrink-0"></div>
                    <div className='space-y-1'>
                        <h6 className='font-inter text-[15px] text-[#8A92A0]'>Calories</h6>
                        <p className='font-oswald font-bold text-5xl text-[#FFFFFF]'>{SumOfActiveTab(totalCal)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanPageSummaryBox;