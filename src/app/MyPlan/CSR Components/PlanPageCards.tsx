"use client";
import { IworkOut } from '@/Components/Types/iWorkout';
import { workContext } from '@/WorkoutContext/workContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { FiStar } from 'react-icons/fi';
import { MdOutlineDone } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';

const PlanPageCards = () => {

    const { addToPlan, setAddToPlan, savedForLater, setSavedForLater, activeTab, sortBy } = useContext(workContext)


    const activeWorkouts = activeTab === 'Today' ? addToPlan : savedForLater;

    const handleRemoveWorkout = (workoutCard: IworkOut) => {
        const restWorkouts = activeWorkouts.filter((eveyWorkout) => eveyWorkout.id !== workoutCard.id)

        if (activeTab === 'Today') {
            setAddToPlan(restWorkouts)
            toast(`Removed from today's plan`,
                {
                    icon: <FaTrashAlt className='text-[16px]  text-red-500' />,
                }
            );
        } else {
            setSavedForLater(restWorkouts)
            toast(`Removed from Saved for later`,
                {
                    icon: <FaTrashAlt className='text-[16px] text-red-500' />,
                }
            );
        }
    }

    const sortedWorkouts = [...activeWorkouts].sort((a, b) => {
        if (sortBy === 'Duration') return b.duration - a.duration
        if (sortBy === 'Calories') return b.caloriesBurned - a.caloriesBurned
        if (sortBy === 'Rating') return b.rating - a.rating
        return 0;
    })



    const [completeIds, setCompleteIds] = useState<number[]>([])

    const handleIsDone = (Done: number) => {
        setCompleteIds((prev) =>
            prev.includes(Done) ? prev.filter((card) => card !== Done) : [...prev, Done])

         toast(`Nice Job`,
                {
                    icon: '🥳',
                }
            );
    }


    return <div>
        {
            sortedWorkouts.length === 0 ?
                <div className='flex flex-col justify-center items-center gap-2 border-2 border-dashed bg-[#111317] rounded-2xl border-[#FFFFFF]/20 p-20'>
                    <h2 className='font-oswald font-bold text-3xl text-[#FFFFFF]'>NOTHING HERE YET</h2>
                    <p className='font-inter text-[17px] text-[#A1A1AA]'>Browse the library and add a lift to get today moving.</p>
                    <Link href={'/'}>
                        <button className='btn bg-[#C2F800] text-[#0C0D10] hover:bg-[#14171E] hover:text-[#C2F800]  hover:border-[#C2F800] rounded-4xl text-[15px] font-inter font-bold py-6 px-8'>Go to workouts</button>
                    </Link>

                </div> :

                <div className='grid grid-cols-1 gap-10'>
                    {sortedWorkouts.map((workout: IworkOut) => {

                        const isMarkedDone = completeIds.includes(workout.id)

                        return <div key={workout.id} className={`${isMarkedDone && activeTab === 'Today' ? ' flex justify-between items-center p-5 bg-[#14171E] border border-[#C2F800]/60 rounded-2xl' : ' flex justify-between items-center p-5 bg-[#14171E] border border-[#232732] rounded-2xl'}`} >

                            <div className='flex gap-6'>
                                <div className='relative w-48 h-28 shrink-0 overflow-hidden rounded-2xl'>
                                    <Image src={workout.image} alt='WorkOut Image' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-cover'></Image>
                                </div>

                                <div className='space-y-4'>
                                    <div>
                                        <h5 className='text-[#FFFFFF] text-2xl font-oswald font-bold'>{workout.name}</h5>
                                        <p className='text-[#9CA3AF]  font-inter'>{workout.equipment}</p>
                                    </div>


                                    <div className='flex items-center gap-5'>
                                        <p className='flex items-center gap-1.5 font-inter text-[#9CA3AF] text-[15px]'><FaRegClock className='text-[#C2F800]' /> {workout.duration} min</p>
                                        <p className='flex items-center gap-1.5 text-[#9CA3AF] text-[15px]'><PiFireSimpleFill className='text-[#C2F800]' /> {workout.caloriesBurned} kcal</p>
                                        <p className='flex items-center gap-1.5 text-[#9CA3AF] text-[15px]'><FiStar className='text-[#C2F800]' /> {workout.rating}</p>
                                    </div>
                                </div>
                            </div>


                            <div className='flex items-center gap-3.5'>
                                <div className='flex items-center gap-3.5'>
                                    <Link href={`/WorkOuts/${workout.id}`}><button className='btn rounded-4xl bg-[#14171E] border border-[#374151] hover:border-[#FFFFFF] py-5 px-5 font-inter font-normal text-[15px] text-[#FFFFFF]'>View Details</button></Link>
                                    {activeTab === 'Today' ?
                                        <button disabled={isMarkedDone} onClick={() => handleIsDone(workout.id)} className={`${isMarkedDone ? 'btn bg-[#14171E] text-[#C2F800] rounded-4xl text-[15px] border-[#C2F800] font-inter font-bold py-5 px-7' : 'btn bg-[#C2F800] hover:bg-[#14171E] hover:text-[#C2F800] text-[#0C0D10] rounded-4xl text-[15px] hover:border-[#C2F800] font-inter font-bold py-5 px-7'}`}><MdOutlineDone className='text-[20px]' />{isMarkedDone ? 'Done' : 'Mark as Done'}</button> : ''}
                                </div>

                                <RxCross2 onClick={() => handleRemoveWorkout(workout)} className='text-[22px] text-[#6B7280] cursor-pointer hover:text-[#FFFFFF]' />
                            </div>

                        </div >

                    })}

                </div>

        }
    </div>

};

export default PlanPageCards;