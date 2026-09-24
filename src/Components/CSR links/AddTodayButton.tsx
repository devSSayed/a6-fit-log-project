"use client";
import { workContext } from '@/WorkoutContext/workContext';
import React, { useContext } from 'react';
import { FaRegCalendarPlus } from 'react-icons/fa6';
import { IworkOut } from '../Types/iWorkout';

const AddTodayButton = ({work}: {work: IworkOut}) => {

    const {addToPlan, setAddToPlan} = useContext(workContext)

    const handleTodaysPlan = () =>{

        setAddToPlan([...addToPlan, work])
    }

    return (
        <button onClick={handleTodaysPlan} className='btn bg-[#C2F800] text-[#0C0D10] font-inter font-bold rounded-2xl w-fit py-6 mt-7'><FaRegCalendarPlus className='text-[16px]' /> Add to today&apos;s plan</button>
    );
};

export default AddTodayButton;