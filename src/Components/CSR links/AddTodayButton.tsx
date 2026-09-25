"use client";
import { workContext } from '@/WorkoutContext/workContext';
import React, { useContext } from 'react';
import { FaRegCalendarPlus } from 'react-icons/fa6';
import { IworkOut } from '../Types/iWorkout';
import toast from 'react-hot-toast';

const AddTodayButton = ({work}: {work: IworkOut}) => {

    const {addToPlan, setAddToPlan} = useContext(workContext)

    const isAdded = addToPlan.find((IsAddedToArr) => IsAddedToArr.id === work.id)

    const handleTodaysPlan = () =>{

        if(isAdded){
            return toast.error(`Already Added in you\'re plan`)
        }else{
            setAddToPlan([...addToPlan, work])
            toast.success(`Added to today\'s plan`)
        }

        
    }

    return (
        <button onClick={handleTodaysPlan} className='btn bg-[#C2F800] text-[#0C0D10] hover:bg-[#14171E] hover:text-[#C2F800] hover:border-[#C2F800] font-inter font-bold rounded-2xl w-fit py-6 mt-7'><FaRegCalendarPlus className='text-[16px]' /> Add to today&apos;s plan</button>
    );
};

export default AddTodayButton;