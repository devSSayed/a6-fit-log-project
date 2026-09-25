"use client";
import React, { useContext } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';
import { IworkOut } from '../Types/iWorkout';
import { workContext } from '@/WorkoutContext/workContext';
import toast from 'react-hot-toast';

const AddToSaveButton = ({ work }: { work: IworkOut }) => {

    const { savedForLater, setSavedForLater } = useContext(workContext)

    const isAdded = savedForLater.find((IsAddedToArr) => IsAddedToArr.id === work.id)

    const handleAddToSave = () => {


        if (isAdded) {
            return toast.error(`Already Added in you\'re saved`)
        } else {
            setSavedForLater([...savedForLater, work])
            toast('Saved for later',
                {
                    icon: <FaBookmark className='text-[16px] text-[#C2F800]'/>,
                }
            );
        }


    }

    return (
        <div>
            <button onClick={handleAddToSave} className='btn border-2 bg-[#0F1115] border-[#374151] hover:border-[#E5E7EB] text-[#E5E7EB] font-inter font-medium rounded-2xl w-fit py-6 mt-7'><FaRegBookmark className='text-[16px] text-[#E5E7EB]' /> Save for later</button>
        </div>
    );
};

export default AddToSaveButton;