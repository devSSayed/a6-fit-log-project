"use client";
import React, { useContext } from 'react';
import { FaRegBookmark } from 'react-icons/fa6';
import { IworkOut } from '../Types/iWorkout';
import { workContext } from '@/WorkoutContext/workContext';

const AddToSaveButton = ({work}: {work: IworkOut}) => {

    const {savedForLater, setSavedForLater} = useContext(workContext)

     const handleAddToSave = () =>{

        setSavedForLater([...savedForLater, work])
    }

    return (
        <div>
            <button onClick={handleAddToSave} className='btn border-2 bg-[#0F1115] border-[#374151] text-[#E5E7EB] font-inter font-medium rounded-2xl w-fit py-6 mt-7'><FaRegBookmark className='text-[16px] text-[#E5E7EB]' /> Save for later</button>
        </div>
    );
};

export default AddToSaveButton;